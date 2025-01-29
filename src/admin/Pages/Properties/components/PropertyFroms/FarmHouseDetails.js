import React, { useState } from "react"

const FarmhouseDetails = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="mb-4 text-2xl font-bold">Farmhouse Details</h2>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="locality" className="block text-sm font-medium text-gray-700">
          Locality
        </label>
        <input
          type="text"
          id="locality"
          name="locality"
          value={formData.locality}
          onChange={handleChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="numberOfBedrooms" className="block text-sm font-medium text-gray-700">
          Number of Bedrooms
        </label>
        <input
          type="number"
          id="numberOfBedrooms"
          name="numberOfBedrooms"
          value={formData.numberOfBedrooms}
          onChange={handleChange}
          required
          min="0"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="numberOfBathrooms" className="block text-sm font-medium text-gray-700">
          Number of Bathrooms
        </label>
        <input
          type="number"
          id="numberOfBathrooms"
          name="numberOfBathrooms"
          value={formData.numberOfBathrooms}
          onChange={handleChange}
          required
          min="0"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="totalFloors" className="block text-sm font-medium text-gray-700">
          Total Floors
        </label>
        <input
          type="number"
          id="totalFloors"
          name="totalFloors"
          value={formData.totalFloors}
          onChange={handleChange}
          min="0"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="furnishedStatus" className="block text-sm font-medium text-gray-700">
          Furnished Status
        </label>
        <select
          id="furnishedStatus"
          name="furnishedStatus"
          value={formData.furnishedStatus}
          onChange={handleChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select furnished status</option>
          <option value="Unfurnished">Unfurnished</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Fully Furnished">Fully Furnished</option>
        </select>
      </div>

      <div>
        <label htmlFor="coveredArea" className="block text-sm font-medium text-gray-700">
          Covered Area (in sq. ft.)
        </label>
        <input
          type="number"
          id="coveredArea"
          name="coveredArea"
          value={formData.coveredArea}
          onChange={handleChange}
          min="0"
          step="0.01"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="carpetArea" className="block text-sm font-medium text-gray-700">
          Carpet Area (in sq. ft.)
        </label>
        <input
          type="number"
          id="carpetArea"
          name="carpetArea"
          value={formData.carpetArea}
          onChange={handleChange}
          min="0"
          step="0.01"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="plotArea" className="block text-sm font-medium text-gray-700">
          Plot Area (in sq. ft.)
        </label>
        <input
          type="number"
          id="plotArea"
          name="plotArea"
          value={formData.plotArea}
          onChange={handleChange}
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
          <option value="Resale">Resale</option>
          <option value="New Booking">New Booking</option>
          <option value="Lease">Lease</option>
        </select>
      </div>

      <div>
        <label htmlFor="possessionStatus" className="block text-sm font-medium text-gray-700">
          Possession Status
        </label>
        <select
          id="possessionStatus"
          name="possessionStatus"
          value={formData.possessionStatus}
          onChange={handleChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select possession status</option>
          <option value="Under Construction">Under Construction</option>
          <option value="Ready to Move">Ready to Move</option>
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
        <label htmlFor="priceDetails.maintenanceCharges" className="block text-sm font-medium text-gray-700">
          Maintenance Charges
        </label>
        <input
          type="number"
          id="priceDetails.maintenanceCharges"
          name="priceDetails.maintenanceCharges"
          value={formData.priceDetails?.maintenanceCharges}
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

export default FarmhouseDetails;
