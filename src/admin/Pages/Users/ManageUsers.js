import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaSearch, FaEllipsisV, FaEdit, FaTrash, FaBan, FaCheck } from "react-icons/fa"
import Layout from "../Layout"
import { UsersData } from "../../Data/UsersData"

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState(null)

  const filteredUsers = useMemo(() => {
    return UsersData.filter(
      (user) =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phoneNumber.includes(searchTerm),
    )
  }, [searchTerm])

  const openUserDetails = (user) => {
    setSelectedUser(user)
    setEditedUser({ ...user })
    setIsEditing(false)
  }

  const closeUserDetails = () => {
    setSelectedUser(null)
    setEditedUser(null)
    setIsEditing(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedUser((prev) => (prev ? { ...prev, [name]: value } : null))
  }

  const handleSave = () => {
    if (editedUser) {
      // Here you would typically send the data to your backend
      console.log("Saving user:", editedUser)
      setSelectedUser(editedUser)
      setIsEditing(false)
    }
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
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
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
              className="overflow-hidden transition-transform duration-200 transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105"
              onClick={() => openUserDetails(user)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src={user.profilePicture || "/placeholder.svg"}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="object-cover w-16 h-16 rounded-full"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800">{`${user.firstName} ${user.lastName}`}</h2>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div className="text-gray-600">
                  <p>
                    <strong>Phone:</strong> {user.phoneNumber}
                  </p>
                  <p>
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
              className="bg-white p-8 rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">User Details</h2>
                <button onClick={closeUserDetails} className="text-gray-500 hover:text-gray-700">
                  <FaEllipsisV />
                </button>
              </div>
              {isEditing ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSave()
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={editedUser?.firstName || ""}
                        onChange={handleInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={editedUser?.lastName || ""}
                        onChange={handleInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={editedUser?.email || ""}
                        onChange={handleInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={editedUser?.phoneNumber || ""}
                        onChange={handleInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedUser.profilePicture || "/placeholder.svg"}
                      alt={`${selectedUser.firstName} ${selectedUser.lastName}`}
                      className="object-cover w-24 h-24 rounded-full"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold">{`${selectedUser.firstName} ${selectedUser.lastName}`}</h3>
                      <p className="text-gray-600">{selectedUser.email}</p>
                      <p className="text-gray-600">{selectedUser.phoneNumber}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-lg font-semibold">Account Details</h4>
                      <p>
                        <strong>Joined:</strong> {new Date(selectedUser.createdAt).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Status:</strong> {selectedUser.isBlocked ? "Blocked" : "Active"}
                      </p>
                    </div>
                    <div>
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
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Queries</h4>
                    <p>{selectedUser.queries.length} active queries</p>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <FaEdit className="inline-block mr-2" />
                      Edit User
                    </button>
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
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default ManageUsers;

