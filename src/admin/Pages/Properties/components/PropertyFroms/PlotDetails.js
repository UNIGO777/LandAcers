import React, { useState } from "react"

const PlotDetails = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="mb-4 text-2xl font-bold">Plot Details</h2>

      <div>
        <label htmlFor="totalPlotArea" className="block text-sm font-medium text-gray-700">
          Total Plot Area (in sq. ft.)
        </label>
        <input
          type="number"
          id="totalPlotArea"
          name="totalPlotArea"
          value={formData.totalPlotArea}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="availablePlotArea" className="block text-sm font-medium text-gray-700">
          Available Plot Area (in sq. ft.)
        </label>
        <input
          type="number"
          id="availablePlotArea"
          name="availablePlotArea"
          value={formData.availablePlotArea}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="transactionType" className="block text-sm font-medium text-gray-700">
          Transaction Type
        </label>
        <select
          id="transactionType"
          name="transactionType"
          value={formData.transactionType}
          onChange={handleChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select transaction type</option>
          <option value="Lease">Lease</option>
          <option value="Sale">Sale</option>
          <option value="New Development">New Development</option>
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="cornerPlotStatus"
          name="cornerPlotStatus"
          checked={formData.cornerPlotStatus}
          onChange={handleChange}
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label htmlFor="cornerPlotStatus" className="block ml-2 text-sm text-gray-900">
          Corner Plot Status
        </label>
      </div>

      <div>
        <label htmlFor="roadFacingWidth" className="block text-sm font-medium text-gray-700">
          Road Facing Width (in meters)
        </label>
        <input
          type="number"
          id="roadFacingWidth"
          name="roadFacingWidth"
          value={formData.roadFacingWidth}
          onChange={handleChange}
          min="0"
          step="0.01"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="priceDetails.totalPrice" className="block text-sm font-medium text-gray-700">
          Total Price
        </label>
        <input
          type="number"
          id="priceDetails.totalPrice"
          name="priceDetails.totalPrice"
          value={formData.priceDetails?.totalPrice}
          onChange={handleChange}
          required
          min="0"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="priceDetails.pricePerSqFt" className="block text-sm font-medium text-gray-700">
          Price per Sq. Ft.
        </label>
        <input
          type="number"
          id="priceDetails.pricePerSqFt"
          name="priceDetails.pricePerSqFt"
          value={formData.priceDetails?.pricePerSqFt}
          onChange={handleChange}
          min="0"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="priceDetails.bookingAmount" className="block text-sm font-medium text-gray-700">
          Booking Amount
        </label>
        <input
          type="number"
          id="priceDetails.bookingAmount"
          name="priceDetails.bookingAmount"
          value={formData.priceDetails?.bookingAmount}
          onChange={handleChange}
          min="0"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="additionalFeatures" className="block text-sm font-medium text-gray-700">
          Additional Features
        </label>
        <textarea
          id="additionalFeatures"
          name="additionalFeatures"
          value={formData.additionalFeatures?.join(", ")}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              additionalFeatures: e.target.value.split(",").map((item) => item.trim()),
            }))
          }
          rows="3"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter additional features separated by commas"
        ></textarea>
      </div>

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

export default PlotDetails;