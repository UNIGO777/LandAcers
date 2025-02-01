import { useState, useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaSearch, FaCalendarAlt, FaUserTie, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { brokersData } from "../../Data/BrokersData"
import Layout from "../Layout"

export default function BrokerManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBroker, setSelectedBroker] = useState(null)
  const [filterDate, setFilterDate] = useState("all")

  const filteredBrokers = useMemo(() => {
    let filtered = [...brokersData]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (broker) =>
          `${broker.firstName} ${broker.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
          broker.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          broker.phoneNumber.includes(searchTerm) ||
          broker._id.toLowerCase().includes(searchTerm.toLowerCase()),
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

    return filtered
  }, [searchTerm, filterDate])

  const handleBlockUnblock = (broker) => {
    // Here you would typically make an API call to block/unblock the broker
    console.log(`${broker.isActive ? "Blocking" : "Unblocking"} broker:`, broker._id)
  }

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">Broker Management</h1>

        {/* Filters and Search */}
        <div className="flex flex-col mb-8 space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, email, phone, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />
            </div>
          </div>
          <select
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Time</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
            <option value="year">Past Year</option>
          </select>
        </div>

        {/* Broker Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBrokers.map((broker) => (
            <motion.div
              key={broker._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:border-blue-500 group"
              onClick={() => setSelectedBroker(broker)}
            >
              <div className="relative p-6">
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src={broker.profilePicture || "/placeholder.svg"}
                    alt={`${broker.firstName} ${broker.lastName}`}
                    className="object-cover w-20 h-20 transition-all duration-300 rounded-full ring-4 ring-gray-200 group-hover:ring-blue-500"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                      {broker.firstName} {broker.lastName}
                    </h2>
                    <p className="text-sm text-gray-600">{broker.email}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <FaPhone className="mr-2 text-blue-500" />
                    <span>{broker.phoneNumber}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    <span>{broker.location || "Location not specified"}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    <span>Joined {new Date(broker.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600">Properties</p>
                    <p className="text-2xl font-bold text-blue-600">{broker.sellingProperties.length}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-green-600">₹{broker.totalRevenue.toLocaleString()}</p>
                  </div>
                </div>
                <span
                  className={`
                    absolute top-4 right-4 px-3 py-1 text-sm font-bold rounded-full
                    ${
                      broker.status === "approved"
                        ? "bg-green-200 text-green-800"
                        : broker.status === "pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                    }
                  `}
                >
                  {broker.status}
                </span>
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
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {selectedBroker.firstName} {selectedBroker.lastName}
                    </h2>
                    <button
                      onClick={() => setSelectedBroker(null)}
                      className="text-gray-500 transition-colors duration-300 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center">
                      <FaUserTie className="mr-3 text-blue-500" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Broker ID</p>
                        <p className="font-semibold">{selectedBroker._id}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="mr-3 text-blue-500" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold">{selectedBroker.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="mr-3 text-blue-500" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-semibold">{selectedBroker.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-3 text-blue-500" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Joined</p>
                        <p className="font-semibold">{new Date(selectedBroker.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="mb-3 text-xl font-semibold">Property Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-100 rounded-lg">
                        <p className="text-sm font-semibold text-blue-800">Selling Properties</p>
                        <p className="text-3xl font-bold text-blue-600">{selectedBroker.sellingProperties.length}</p>
                      </div>
                      <div className="p-4 bg-green-100 rounded-lg">
                        <p className="text-sm font-semibold text-green-800">Total Revenue</p>
                        <p className="text-3xl font-bold text-green-600">
                          ₹{selectedBroker.totalRevenue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="mb-3 text-xl font-semibold">Subscription</h3>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <p className="mb-2">
                        <span className="font-semibold">Plan:</span> {selectedBroker.subscriptionPlan.planName}
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold">Status:</span> {selectedBroker.subscriptionPlan.status}
                      </p>
                      <p>
                        <span className="font-semibold">Expires:</span>{" "}
                        {new Date(selectedBroker.subscriptionPlan.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        /* Handle verification */
                      }}
                      className={`
                        px-6 py-2 text-lg font-semibold rounded-lg transition-colors duration-300
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
                        px-6 py-2 text-lg font-semibold rounded-lg transition-colors duration-300
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

