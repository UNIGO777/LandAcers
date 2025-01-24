import { FaEllipsisV, FaEye, FaEdit, FaTrash } from "react-icons/fa"

const properties = [
  {
    name: "Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$2,500,000",
    status: "For Sale",
    completion: 100,
    agent: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Modern Apartment",
    location: "Manhattan, NY",
    price: "$850,000",
    status: "For Rent",
    completion: 75,
    agent: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Beach House",
    location: "Miami, FL",
    price: "$1,200,000",
    status: "Under Contract",
    completion: 90,
    agent: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Mountain Cabin",
    location: "Aspen, CO",
    price: "$750,000",
    status: "For Sale",
    completion: 60,
    agent: "/placeholder.svg?height=32&width=32",
  },
]

const RecentProperties = () => {
  return (
    <div className="p-6 mt-6 bg-white shadow-lg rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Properties</h3>
          <p className="text-sm text-gray-500">
            <span className="font-medium text-blue-600">12 new</span> properties this month
          </p>
        </div>
        <button className="p-2 transition-colors duration-200 rounded hover:bg-gray-100">
          <FaEllipsisV className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                Property
              </th>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                Location
              </th>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                Price
              </th>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                Status
              </th>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                Completion
              </th>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map((property, index) => (
              <tr key={index} className="transition-colors duration-200 hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 font-bold text-gray-500 bg-gray-200 rounded-lg">
                      {property.name[0]}
                    </div>
                    <p className="text-sm font-medium text-gray-900">{property.name}</p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm text-gray-600">{property.location}</p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm font-medium text-gray-900">{property.price}</p>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium
                    ${
                      property.status === "For Sale"
                        ? "bg-green-100 text-green-800"
                        : property.status === "For Rent"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {property.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-900">{property.completion}%</p>
                    </div>
                    <div className="w-full h-2 mt-1 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${property.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 transition-colors duration-200 hover:text-blue-600">
                      <FaEye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 transition-colors duration-200 hover:text-green-600">
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 transition-colors duration-200 hover:text-red-600">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default RecentProperties

