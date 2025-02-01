import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaBuilding, FaUserTie, FaQuestionCircle } from 'react-icons/fa'

const Notifications = ({ isOpen, onClose }) => {
  // Mock data for notifications
  const notifications = [
    { id: 1, type: 'property', message: 'New property addition request from John Doe', time: '2 hours ago' },
    { id: 2, type: 'broker', message: 'New broker account registered: Jane Smith', time: '4 hours ago' },
    { id: 3, type: 'query', message: 'New query received about Property ID: 12345', time: '1 day ago' },
    { id: 4, type: 'property', message: 'Property update request for ID: 67890', time: '2 days ago' },
  ]

  const getIcon = (type) => {
    switch (type) {
      case 'property':
        return <FaBuilding className="w-6 h-6 text-blue-500" />
      case 'broker':
        return <FaUserTie className="w-6 h-6 text-green-500" />
      case 'query':
        return <FaQuestionCircle className="w-6 h-6 text-yellow-500" />
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Notifications</h2>
            <div className="space-y-4 overflow-y-auto max-h-[60vh]">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start p-3 space-x-3 bg-gray-100 rounded-lg"
                >
                  {getIcon(notification.type)}
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{notification.message}</p>
                    <p className="mt-1 text-xs text-gray-500">{notification.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notifications
