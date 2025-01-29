import React, { useState } from "react"

const LandDetails = ({ onSubmit, initialData }) => {
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
      <h2 className="mb-4 text-2xl font-bold">Land Details</h2>

      <div>
        <label htmlFor="numberOfOpenSides" className="block text-sm font-medium text-gray-700">
          Number of Open Sides
        </label>
        <input
          type="number"
          id="numberOfOpenSides"
          name="numberOfOpenSides"
          value={formData.numberOfOpenSides}
          onChange={handleChange}
          required
          min="0"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="widthOfRoadFacing" className="block text-sm font-medium text-gray-700">
          Width of Road Facing (in meters)
        </label>
        <input
          type="number"
          id="widthOfRoadFacing"
          name="widthOfRoadFacing"
          value={formData.widthOfRoadFacing}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="constructionStatus"
          name="constructionStatus"
          checked={formData.constructionStatus}
          onChange={handleChange}
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label htmlFor="constructionStatus" className="block ml-2 text-sm text-gray-900">
          Construction Status
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="boundaryWallStatus"
          name="boundaryWallStatus"
          checked={formData.boundaryWallStatus}
          onChange={handleChange}
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label htmlFor="boundaryWallStatus" className="block ml-2 text-sm text-gray-900">
          Boundary Wall Status
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="gatedColonyStatus"
          name="gatedColonyStatus"
          checked={formData.gatedColonyStatus}
          onChange={handleChange}
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label htmlFor="gatedColonyStatus" className="block ml-2 text-sm text-gray-900">
          Gated Colony Status
        </label>
      </div>

      <div>
        <label htmlFor="plotArea" className="block text-sm font-medium text-gray-700">
          Plot Area (in sq. meters)
        </label>
        <input
          type="number"
          id="plotArea"
          name="plotArea"
          value={formData.plotArea}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="length" className="block text-sm font-medium text-gray-700">
          Length (in meters)
        </label>
        <input
          type="number"
          id="length"
          name="length"
          value={formData.length}
          onChange={handleChange}
          min="0"
          step="0.01"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="breadth" className="block text-sm font-medium text-gray-700">
          Breadth (in meters)
        </label>
        <input
          type="number"
          id="breadth"
          name="breadth"
          value={formData.breadth}
          onChange={handleChange}
          min="0"
          step="0.01"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
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
          <option value="New Property">New Property</option>
          <option value="Resale">Resale</option>
        </select>
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
        <label htmlFor="priceDetails.pricePerSqYrd" className="block text-sm font-medium text-gray-700">
          Price per Sq. Yard
        </label>
        <input
          type="number"
          id="priceDetails.pricePerSqYrd"
          name="priceDetails.pricePerSqYrd"
          value={formData.priceDetails?.pricePerSqYrd}
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

export default LandDetails;
