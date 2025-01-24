import { FaEllipsisV } from "react-icons/fa"

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
    <div className="p-6 mt-6 bg-white shadow-sm rounded-xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold">Recent Properties</h3>
          <p className="text-sm text-gray-500">
            <span className="font-medium text-[#3B82F6]">12 new</span> properties this month
          </p>
        </div>
        <button className="p-2 rounded hover:bg-gray-100">
          <FaEllipsisV className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th className="px-4 py-3 text-xs font-medium text-left text-gray-400 border-b border-gray-200">
                PROPERTY
              </th>
              <th className="px-4 py-3 text-xs font-medium text-left text-gray-400 border-b border-gray-200">
                LOCATION
              </th>
              <th className="px-4 py-3 text-xs font-medium text-left text-gray-400 border-b border-gray-200">PRICE</th>
              <th className="px-4 py-3 text-xs font-medium text-left text-gray-400 border-b border-gray-200">STATUS</th>
              <th className="px-4 py-3 text-xs font-medium text-left text-gray-400 border-b border-gray-200">
                COMPLETION
              </th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={index}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                    <p className="text-sm font-semibold">{property.name}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-gray-600">{property.location}</p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm font-medium">{property.price}</p>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium
                    ${
                      property.status === "For Sale"
                        ? "bg-green-100 text-green-700"
                        : property.status === "For Rent"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {property.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">{property.completion}%</p>
                    </div>
                    <div className="w-full h-1 mt-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full rounded-full bg-[#3B82F6]"
                        style={{ width: `${property.completion}%` }}
                      ></div>
                    </div>
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

