import { FaHome, FaUsers, FaMoneyBillWave, FaQuestionCircle } from "react-icons/fa"

const MetricCards = () => {
  return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 transition-shadow duration-300 bg-white border-b-4 border-blue-500 shadow-lg rounded-xl hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Properties</p>
              <div className="flex items-baseline mt-2">
                <p className="text-2xl font-bold text-gray-900">2,453</p>
                <p className="ml-2 text-sm font-medium text-green-600">+12%</p>
              </div>
              <p className="mt-1 text-xs text-gray-500">from last month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FaHome className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="w-full h-1 mt-4 overflow-hidden bg-gray-200 rounded-full">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "70%" }}></div>
          </div>
        </div>
  
        <div className="p-6 transition-shadow duration-300 bg-white border-b-4 border-green-500 shadow-lg rounded-xl hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Users</p>
              <div className="flex items-baseline mt-2">
                <p className="text-2xl font-bold text-gray-900">1,234</p>
                <p className="ml-2 text-sm font-medium text-green-600">+8%</p>
              </div>
              <p className="mt-1 text-xs text-gray-500">from last week</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FaUsers className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="w-full h-1 mt-4 overflow-hidden bg-gray-200 rounded-full">
            <div className="h-full bg-green-500 rounded-full" style={{ width: "60%" }}></div>
          </div>
        </div>
  
        <div className="p-6 transition-shadow duration-300 bg-white border-b-4 border-yellow-500 shadow-lg rounded-xl hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <div className="flex items-baseline mt-2">
                <p className="text-2xl font-bold text-gray-900">$84,245</p>
                <p className="ml-2 text-sm font-medium text-green-600">+23%</p>
              </div>
              <p className="mt-1 text-xs text-gray-500">from last month</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaMoneyBillWave className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="w-full h-1 mt-4 overflow-hidden bg-gray-200 rounded-full">
            <div className="h-full bg-yellow-500 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
  
        <div className="p-6 transition-shadow duration-300 bg-white border-b-4 border-red-500 shadow-lg rounded-xl hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Queries</p>
              <div className="flex items-baseline mt-2">
                <p className="text-2xl font-bold text-gray-900">45</p>
                <p className="ml-2 text-sm font-medium text-red-600">+12</p>
              </div>
              <p className="mt-1 text-xs text-gray-500">new queries today</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <FaQuestionCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="w-full h-1 mt-4 overflow-hidden bg-gray-200 rounded-full">
            <div className="h-full bg-red-500 rounded-full" style={{ width: "40%" }}></div>
          </div>
        </div>
      </div>
  )
}

export default MetricCards