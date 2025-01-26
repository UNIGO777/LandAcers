import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaEye, FaCalendarAlt, FaDollarSign, FaTimes, FaFilter } from "react-icons/fa"
import Layout from "../components/Layout"
import { dummyProperties, getTypeIcon } from "../dummyData"

const AllProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [filters, setFilters] = useState({
    type: "",
    status: "",
  })

  const filteredProperties = useMemo(() => {
    return dummyProperties.filter((property) => {
      return (
        (filters.type === "" || property.type === filters.type) &&
        (filters.status === "" || property.status === filters.status)
      )
    })
  }, [filters])

  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "bg-green-500"
      case "sold":
        return "bg-red-500"
      case "pending":
        return "bg-yellow-500"
      case "upcoming":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const openGallery = (property) => {
    setSelectedProperty(property)
  }

  const closeGallery = () => {
    setSelectedProperty(null)
  }

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">All Properties</h1>

        {/* Filter Section */}
        <div className="flex items-center mb-6 space-x-4">
          <FaFilter className="text-gray-500" />
          <select
            className="px-2 py-1 border rounded-md"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="land">Land</option>
            <option value="farmhouse">Farmhouse</option>
            <option value="plot">Plot</option>
          </select>
          <select
            className="px-2 py-1 border rounded-md"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">All Statuses</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="pending">Pending</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <motion.div
              key={property._id}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                <img
                  src={property.thumbnailImage || "/placeholder.svg"}
                  alt={property.title}
                  className="object-cover w-full h-48 cursor-pointer"
                  onClick={() => openGallery(property)}
                />
                <div
                  className={`absolute top-0 right-0 m-2 px-2 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(property.status)}`}
                >
                  {property.status}
                </div>
                {property.isUpcoming && (
                  <div className="absolute top-0 left-0 px-2 py-1 m-2 text-xs font-semibold text-white bg-purple-500 rounded-full">
                    Upcoming
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
                  <div className="text-2xl">
                    {React.createElement(getTypeIcon(property.type), { className: "text-blue-500" })}
                  </div>
                </div>
                <p className="mb-4 text-gray-600 line-clamp-2">{property.description}</p>
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <FaCalendarAlt className="mr-2" />
                  <span>
                    {property.isUpcoming
                      ? "Launch: " + property.upcomingDetails?.expectedLaunchDate
                      : "Listed: " + new Date().toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaEye className="mr-1" />
                    <span>{property.views} views</span>
                  </div>
                  <div className="flex items-center">
                    <FaDollarSign className="mr-1" />
                    <span>
                      {property.isUpcoming
                        ? `${property.upcomingDetails?.priceRange.min.toLocaleString()} - ${property.upcomingDetails?.priceRange.max.toLocaleString()}`
                        : property.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                {property.isUpcoming && property.upcomingDetails?.highlights && (
                  <div className="mt-2">
                    <h3 className="text-sm font-semibold text-gray-700">Highlights:</h3>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {property.upcomingDetails.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-3xl p-4 mx-4 bg-white rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{selectedProperty.title}</h2>
                <button onClick={closeGallery} className="text-gray-500 hover:text-gray-700">
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {selectedProperty.images.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${selectedProperty.title} - Image ${index + 1}`}
                    className="object-cover w-full h-64 rounded-lg"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default AllProperties

