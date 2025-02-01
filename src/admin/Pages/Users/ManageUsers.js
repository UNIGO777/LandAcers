import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaSearch, FaBan, FaCheck, FaTimes } from "react-icons/fa"
import Layout from "../Layout"
import { UsersData } from "../../Data/UsersData"

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)

  const filteredUsers = useMemo(() => {
    return UsersData.filter(
      (user) =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user._id.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const openUserDetails = (user) => {
    setSelectedUser(user)
  }

  const closeUserDetails = () => {
    setSelectedUser(null)
  }

  const handleBlockUnblock = (user) => {
    // Here you would typically send the request to your backend
    console.log(`${user.isBlocked ? "Unblocking" : "Blocking"} user:`, user._id)
    setSelectedUser((prev) => (prev ? { ...prev, isBlocked: !prev.isBlocked } : null))
  }

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">User Management</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search users by email, name, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
        </div>

        {/* User List */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <motion.div
              key={user._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
              onClick={() => openUserDetails(user)}
            >
              <div className="relative p-6">
                <div className="absolute top-0 right-0 p-4">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      user.isBlocked ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                    }`}
                  >
                    {user.isBlocked ? "Blocked" : "Active"}
                  </span>
                </div>
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src={user.profilePicture || "/placeholder.svg"}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="object-cover w-20 h-20 rounded-full ring-2 ring-blue-500"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{`${user.firstName} ${user.lastName}`}</h2>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">ID: {user._id}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-1">
                    <strong>Phone:</strong> {user.phoneNumber}
                  </p>
                  <p className="mb-1">
                    <strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Properties:</strong>{" "}
                    {user.favoriteProperties.length + user.sellingProperties.length + user.buyingProperties.length}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* User Details Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={closeUserDetails}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative bg-white p-8 rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeUserDetails}
                className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800">User Details</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedUser.profilePicture || "/placeholder.svg"}
                    alt={`${selectedUser.firstName} ${selectedUser.lastName}`}
                    className="object-cover w-24 h-24 rounded-full ring-4 ring-blue-500"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold">{`${selectedUser.firstName} ${selectedUser.lastName}`}</h3>
                    <p className="text-gray-600">{selectedUser.email}</p>
                    <p className="text-gray-600">{selectedUser.phoneNumber}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="mb-2 text-lg font-semibold">Account Details</h4>
                    <p>
                      <strong>User ID:</strong> {selectedUser._id}
                    </p>
                    <p>
                      <strong>Joined:</strong> {new Date(selectedUser.createdAt).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedUser.isBlocked ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {selectedUser.isBlocked ? "Blocked" : "Active"}
                      </span>
                    </p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="mb-2 text-lg font-semibold">Property Activity</h4>
                    <p>
                      <strong>Favorite Properties:</strong> {selectedUser.favoriteProperties.length}
                    </p>
                    <p>
                      <strong>Selling Properties:</strong> {selectedUser.sellingProperties.length}
                    </p>
                    <p>
                      <strong>Buying Properties:</strong> {selectedUser.buyingProperties.length}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="mb-2 text-lg font-semibold">Queries</h4>
                  <p>{selectedUser.queries.length} active queries</p>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleBlockUnblock(selectedUser)}
                    className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      selectedUser.isBlocked
                        ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                        : "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                    }`}
                  >
                    {selectedUser.isBlocked ? (
                      <>
                        <FaCheck className="inline-block mr-2" />
                        Unblock User
                      </>
                    ) : (
                      <>
                        <FaBan className="inline-block mr-2" />
                        Block User
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default ManageUsers
