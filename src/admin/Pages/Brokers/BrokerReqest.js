import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaSearch, FaSort, FaSortUp, FaSortDown } from "react-icons/fa"
import { getBrokerRequests } from "../../Data/BrokerReqData"
import Layout from "../Layout"

export default function BrokerRequests() {
  const [brokerRequests, setBrokerRequests] = useState([])
  const [filteredRequests, setFilteredRequests] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [sortConfig, setSortConfig] = useState({ key: "registrationDate", direction: "desc" })
  const [selectedBroker, setSelectedBroker] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBrokerRequests()
      setBrokerRequests(data)
      setFilteredRequests(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    let filtered = [...brokerRequests]

    // Apply date filter
    if (startDate && endDate) {
      const start = new Date(startDate)
      const end = new Date(endDate)
      end.setHours(23, 59, 59, 999) // Set to end of day
      filtered = filtered.filter((broker) => {
        const registrationDate = new Date(broker.registrationDate)
        return registrationDate >= start && registrationDate <= end
      })
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (broker) =>
          broker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          broker.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          broker.email.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1
      }
      return 0
    })

    setFilteredRequests(filtered)
  }, [brokerRequests, startDate, endDate, searchTerm, sortConfig])

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === "asc" ? "desc" : "asc",
    }))
  }

  const handleApprove = (brokerId) => {
    // Implement approval logic here
    console.log(`Approved broker with ID: ${brokerId}`)
    setSelectedBroker(null)
  }

  const handleBlock = (brokerId) => {
    // Implement block logic here
    console.log(`Blocked broker with ID: ${brokerId}`)
    setSelectedBroker(null)
  }

  return (
    <Layout>
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Broker Requests</h1>

      <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-grow md:max-w-md">
          <input
            type="text"
            placeholder="Search brokers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="startDate" className="text-sm font-medium text-gray-700">
            From:
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="endDate" className="text-sm font-medium text-gray-700">
            To:
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                <button className="flex items-center" onClick={() => handleSort("name")}>
                  Name
                  {sortConfig.key === "name" &&
                    (sortConfig.direction === "asc" ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />)}
                  {sortConfig.key !== "name" && <FaSort className="ml-1" />}
                </button>
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                <button className="flex items-center" onClick={() => handleSort("email")}>
                  Email
                  {sortConfig.key === "email" &&
                    (sortConfig.direction === "asc" ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />)}
                  {sortConfig.key !== "email" && <FaSort className="ml-1" />}
                </button>
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                <button className="flex items-center" onClick={() => handleSort("experience")}>
                  Experience
                  {sortConfig.key === "experience" &&
                    (sortConfig.direction === "asc" ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />)}
                  {sortConfig.key !== "experience" && <FaSort className="ml-1" />}
                </button>
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                <button className="flex items-center" onClick={() => handleSort("registrationDate")}>
                  Registration Date
                  {sortConfig.key === "registrationDate" &&
                    (sortConfig.direction === "asc" ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />)}
                  {sortConfig.key !== "registrationDate" && <FaSort className="ml-1" />}
                </button>
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredRequests.map((broker) => (
              <tr key={broker.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 mr-3 rounded-full"
                      src={broker.profilePicture || "/placeholder.svg"}
                      alt={broker.name}
                    />
                    <div className="text-sm font-medium text-gray-900">{broker.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{broker.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{broker.experience} years</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{new Date(broker.registrationDate).toLocaleDateString()}</div>
                </td>
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                  <button
                    onClick={() => setSelectedBroker(broker)}
                    className="mr-4 text-indigo-600 hover:text-indigo-900"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
              <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold">{selectedBroker.name}</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold">{selectedBroker.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold">{selectedBroker.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-semibold">{selectedBroker.experience} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Specialization</p>
                    <p className="font-semibold">{selectedBroker.specialization}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold">Registration Details</h3>
                  <div className="p-4 bg-gray-100 rounded">
                    <p>
                      <span className="font-semibold">Requested:</span>{" "}
                      {new Date(selectedBroker.registrationDate).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-semibold">ID:</span> {selectedBroker.id}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => handleApprove(selectedBroker.id)}
                    className="px-4 py-2 font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleBlock(selectedBroker.id)}
                    className="px-4 py-2 font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
                  >
                    Block
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

