import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { FaSave, FaTrash, FaUpload, FaExclamationTriangle } from "react-icons/fa"
import Layout from "../components/Layout"
import { dummyProperties } from "../dummyData"

const ManageProperty = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulating API call to fetch property details
    const fetchProperty = async () => {
      setIsLoading(true)
      try {
        // In a real application, this would be an API call
        const foundProperty = dummyProperties.find((p) => p._id === id)
        if (foundProperty) {
          setProperty(foundProperty)
        } else {
          setError("Property not found")
        }
      } catch (err) {
        setError("Failed to fetch property details")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProperty()
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProperty((prev) => {
      if (!prev) return null
      if (name.includes(".")) {
        const [parent, child] = name.split(".")
        return { ...prev, [parent]: { ...prev[parent], [child]: value } }
      }
      return { ...prev, [name]: value }
    })
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulating API call to save property details
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    // In a real application, you would make an API call here
    alert("Property details saved successfully!")
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      // Simulating API call to delete property
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // In a real application, you would make an API call here
      alert("Property deleted successfully!")
      // Redirect to properties list or dashboard
    }
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="w-32 h-32 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </Layout>
    )
  }

  if (error || !property) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen">
          <FaExclamationTriangle className="mb-4 text-5xl text-red-500" />
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Error</h2>
          <p className="text-gray-600">{error || "An unexpected error occurred"}</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 py-8 mx-auto"
      >
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Manage Property</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSave()
          }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={property.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="type" className="block mb-1 text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                id="type"
                name="type"
                value={property.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="land">Land</option>
                <option value="farmhouse">Farmhouse</option>
                <option value="plot">Plot</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block mb-1 text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={property.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="available">Available</option>
                <option value="sold">Sold</option>
                <option value="pending">Pending</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block mb-1 text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={property.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={property.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label htmlFor="location.state" className="block mb-1 text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                id="location.state"
                name="location.state"
                value={property.location.state}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="location.district" className="block mb-1 text-sm font-medium text-gray-700">
                District
              </label>
              <input
                type="text"
                id="location.district"
                name="location.district"
                value={property.location.district}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="location.city" className="block mb-1 text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="location.city"
                name="location.city"
                value={property.location.city}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="location.locality" className="block mb-1 text-sm font-medium text-gray-700">
                Locality
              </label>
              <input
                type="text"
                id="location.locality"
                name="location.locality"
                value={property.location.locality}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="location.pincode" className="block mb-1 text-sm font-medium text-gray-700">
                Pincode
              </label>
              <input
                type="text"
                id="location.pincode"
                name="location.pincode"
                value={property.location.pincode}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Images</label>
            <div className="flex flex-wrap gap-4">
              {property.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Property ${index + 1}`}
                    className="object-cover w-24 h-24 rounded-md"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 p-1 text-xs text-white bg-red-500 rounded-full"
                    onClick={() => {
                      setProperty((prev) => {
                        if (!prev) return null
                        const newImages = [...prev.images]
                        newImages.splice(index, 1)
                        return { ...prev, images: newImages }
                      })
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="flex items-center justify-center w-24 h-24 text-gray-400 border-2 border-gray-300 border-dashed rounded-md hover:text-gray-600 hover:border-gray-400"
                onClick={() => {
                  // In a real application, this would open a file picker
                  alert("Image upload functionality would be implemented here")
                }}
              >
                <FaUpload className="text-2xl" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSaving ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete Property
            </button>
          </div>
        </form>
      </motion.div>
    </Layout>
  )
}

export default ManageProperty
