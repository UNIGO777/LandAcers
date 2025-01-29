import React, { useState, useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaSearch, FaChartLine, FaFileAlt, FaHistory } from "react-icons/fa"
import { brokersData } from "../../Data/BrokersData"
import Layout from "../Layout"

export default function BrokerManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBroker, setSelectedBroker] = useState(null)
  const [filterDate, setFilterDate] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const filteredBrokers = useMemo(() => {
    let filtered = [...brokersData]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (broker) =>
          `${broker.firstName} ${broker.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
          broker.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          broker.phoneNumber.includes(searchTerm),
      )
    }

    // Date filter
    if (filterDate !== "all") {
      const now = new Date()
      const past = new Date()
      switch (filterDate) {
        case "week":
          past.setDate(past.getDate() - 7)
          break
        case "month":
          past.setMonth(past.getMonth() - 1)
          break
        case "year":
          past.setFullYear(past.getFullYear() - 1)
          break
      }
      filtered = filtered.filter((broker) => new Date(broker.createdAt) >= past && new Date(broker.createdAt) <= now)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
        case "date":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "properties":
          return (
            b.sellingProperties?.length ?? 0 +
            b.buyingProperties?.length ?? 0 -
            (a.sellingProperties?.length ?? 0 + a.buyingProperties?.length ?? 0)
          )
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, filterDate, sortBy])

  const handleBlockUnblock = (broker) => {
    // Here you would typically make an API call to block/unblock the broker
    console.log(`${broker.isActive ? "Blocking" : "Unblocking"} broker:`, broker._id)
  }

  return (
    <Layout>
    <div className="container px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Broker Management</h1>
        <div className="flex gap-4">
          <select
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Time</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
            <option value="year">Past Year</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="date">Sort by Date</option>
            <option value="properties">Sort by Properties</option>
          </select>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search brokers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
      </div>

      {/* Broker Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBrokers.map((broker) => (
          <motion.div
            key={broker._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden transition-shadow duration-200 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
            onClick={() => setSelectedBroker(broker)}
          >
            <div className="relative h-48">
              <img
                src={broker.profilePicture || "/placeholder.svg"}
                alt={`${broker.firstName} ${broker.lastName}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h2 className="text-xl font-semibold text-white">
                  {broker.firstName} {broker.lastName}
                </h2>
                <p className="text-sm text-white/90">{broker.email}</p>
              </div>
              <span
                className={`
                absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold
                ${
                  broker.status === "approved"
                    ? "bg-green-500 text-white"
                    : broker.status === "pending"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                }
              `}
              >
                {broker.status}
              </span>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-2 text-center rounded bg-gray-50">
                  <p className="text-sm text-gray-600">Properties</p>
                  <p className="text-lg font-bold">
                    {broker.sellingProperties?.length ?? 0 + broker.buyingProperties?.length ?? 0}
                  </p>
                </div>
                <div className="p-2 text-center rounded bg-gray-50">
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="text-lg font-bold">₹{broker.totalRevenue.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Joined {new Date(broker.createdAt).toLocaleDateString()}</span>
                <span
                  className={`
                  px-2 py-1 rounded-full
                  ${broker.subscriptionPlan.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                `}
                >
                  {broker.subscriptionPlan.planName}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Broker Details Modal */}
      <AnimatePresence>
        {selectedBroker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/50"
            onClick={() => setSelectedBroker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Broker Details */}
              <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold">
                  {selectedBroker.firstName} {selectedBroker.lastName}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold">{selectedBroker.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold">{selectedBroker.phoneNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-semibold capitalize">{selectedBroker.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Joined</p>
                    <p className="font-semibold">{new Date(selectedBroker.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold">Property Statistics</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 bg-gray-100 rounded">
                      <p className="text-sm text-gray-600">Selling</p>
                      <p className="font-bold">{selectedBroker.sellingProperties?.length ?? 0}</p>
                    </div>
                    <div className="p-3 bg-gray-100 rounded">
                      <p className="text-sm text-gray-600">Buying</p>
                      <p className="font-bold">{selectedBroker.buyingProperties?.length ?? 0}</p>
                    </div>
                    <div className="p-3 bg-gray-100 rounded">
                      <p className="text-sm text-gray-600">Featured</p>
                      <p className="font-bold">{selectedBroker.featuredProperties?.length ?? 0}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold">Subscription</h3>
                  <div className="p-4 bg-gray-100 rounded">
                    <p>
                      <span className="font-semibold">Plan:</span> {selectedBroker.subscriptionPlan.planName}
                    </p>
                    <p>
                      <span className="font-semibold">Status:</span> {selectedBroker.subscriptionPlan.status}
                    </p>
                    <p>
                      <span className="font-semibold">Expires:</span>{" "}
                      {new Date(selectedBroker.subscriptionPlan.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => {
                      /* Handle verification */
                    }}
                    className={`
                      px-4 py-2 rounded-lg font-medium
                      ${
                        selectedBroker.isVerified
                          ? "bg-gray-200 text-gray-700"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }
                    `}
                  >
                    {selectedBroker.isVerified ? "Verified" : "Verify Documents"}
                  </button>
                  <button
                    onClick={() => handleBlockUnblock(selectedBroker)}
                    className={`
                      px-4 py-2 rounded-lg font-medium
                      ${
                        selectedBroker.isActive
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }
                    `}
                  >
                    {selectedBroker.isActive ? "Block Broker" : "Unblock Broker"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </Layout>
  )
}

