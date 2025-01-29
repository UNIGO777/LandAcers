import React, { useState } from "react"

const BasicDetails = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setFormData((prevData) => ({
        ...prevData,
        [parent]: { ...prevData[parent], [child]: type === "checkbox" ? checked : value },
      }))
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: type === "checkbox" ? checked : value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="3"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="location.state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            id="location.state"
            name="location.state"
            value={formData.location.state}
            onChange={handleChange}
            required
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="location.district" className="block text-sm font-medium text-gray-700">
            District
          </label>
          <input
            type="text"
            id="location.district"
            name="location.district"
            value={formData.location.district}
            onChange={handleChange}
            required
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="location.city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="location.city"
            name="location.city"
            value={formData.location.city}
            onChange={handleChange}
            required
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="location.locality" className="block text-sm font-medium text-gray-700">
            Locality
          </label>
          <input
            type="text"
            id="location.locality"
            name="location.locality"
            value={formData.location.locality}
            onChange={handleChange}
            required
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="location.pincode" className="block text-sm font-medium text-gray-700">
            Pincode
          </label>
          <input
            type="text"
            id="location.pincode"
            name="location.pincode"
            value={formData.location.pincode}
            onChange={handleChange}
            required
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Property Type
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select a type</option>
          <option value="land">Land</option>
          <option value="farmhouse">Farmhouse</option>
          <option value="plot">Plot</option>
        </select>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="available">Available</option>
          <option value="sold">Sold</option>
          <option value="pending">Pending</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="isUpcoming"
          name="isUpcoming"
          checked={formData.isUpcoming}
          onChange={handleChange}
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label htmlFor="isUpcoming" className="block ml-2 text-sm text-gray-900">
          Is this an upcoming property?
        </label>
      </div>

      {formData.isUpcoming && (
        <div className="space-y-4">
          <div>
            <label htmlFor="upcomingDetails.expectedLaunchDate" className="block text-sm font-medium text-gray-700">
              Expected Launch Date
            </label>
            <input
              type="date"
              id="upcomingDetails.expectedLaunchDate"
              name="upcomingDetails.expectedLaunchDate"
              value={formData.upcomingDetails.expectedLaunchDate}
              onChange={handleChange}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="upcomingDetails.developerName" className="block text-sm font-medium text-gray-700">
              Developer Name
            </label>
            <input
              type="text"
              id="upcomingDetails.developerName"
              name="upcomingDetails.developerName"
              value={formData.upcomingDetails.developerName}
              onChange={handleChange}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="upcomingDetails.priceRange.min" className="block text-sm font-medium text-gray-700">
                Min Price
              </label>
              <input
                type="number"
                id="upcomingDetails.priceRange.min"
                name="upcomingDetails.priceRange.min"
                value={formData.upcomingDetails.priceRange.min}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="upcomingDetails.priceRange.max" className="block text-sm font-medium text-gray-700">
                Max Price
              </label>
              <input
                type="number"
                id="upcomingDetails.priceRange.max"
                name="upcomingDetails.priceRange.max"
                value={formData.upcomingDetails.priceRange.max}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="upcomingDetails.highlights" className="block text-sm font-medium text-gray-700">
              Highlights
            </label>
            <textarea
              id="upcomingDetails.highlights"
              name="upcomingDetails.highlights"
              value={formData.upcomingDetails.highlights.join(", ")}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  upcomingDetails: {
                    ...prevData.upcomingDetails,
                    highlights: e.target.value.split(",").map((item) => item.trim()),
                  },
                }))
              }
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter highlights separated by commas"
            ></textarea>
          </div>
        </div>
      )}

      <div className="flex items-center">
        <input
          type="checkbox"
          id="isFeatured"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleChange}
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label htmlFor="isFeatured" className="block ml-2 text-sm text-gray-900">
          Is this a featured property?
        </label>
      </div>

      {formData.isFeatured && (
        <div className="space-y-4">
          <div>
            <label htmlFor="featuredDetails.startDate" className="block text-sm font-medium text-gray-700">
              Featured Start Date
            </label>
            <input
              type="date"
              id="featuredDetails.startDate"
              name="featuredDetails.startDate"
              value={formData.featuredDetails.startDate}
              onChange={handleChange}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="featuredDetails.endDate" className="block text-sm font-medium text-gray-700">
              Featured End Date
            </label>
            <input
              type="date"
              id="featuredDetails.endDate"
              name="featuredDetails.endDate"
              value={formData.featuredDetails.endDate}
              onChange={handleChange}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="featuredDetails.promotionalText" className="block text-sm font-medium text-gray-700">
              Promotional Text
            </label>
            <textarea
              id="featuredDetails.promotionalText"
              name="featuredDetails.promotionalText"
              value={formData.featuredDetails.promotionalText}
              onChange={handleChange}
              rows="3"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <label htmlFor="featuredDetails.priority" className="block text-sm font-medium text-gray-700">
              Priority
            </label>
            <input
              type="number"
              id="featuredDetails.priority"
              name="featuredDetails.priority"
              value={formData.featuredDetails.priority}
              onChange={handleChange}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default BasicDetails;

