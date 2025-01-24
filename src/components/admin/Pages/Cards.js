import { FaHome, FaUsers, FaMoneyBillWave, FaQuestionCircle } from "react-icons/fa"

const MetricCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="p-6 bg-white shadow-sm rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Properties</p>
            <div className="flex items-baseline mt-2">
              <p className="text-2xl font-semibold">2,453</p>
              <p className="ml-2 text-sm font-medium text-green-500">+12%</p>
            </div>
            <p className="mt-1 text-xs text-gray-500">from last month</p>
          </div>
          <div className="rounded-full bg-[#3B82F6] bg-opacity-10 p-3">
            <FaHome className="h-6 w-6 text-[#3B82F6]" />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white shadow-sm rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Active Users</p>
            <div className="flex items-baseline mt-2">
              <p className="text-2xl font-semibold">1,234</p>
              <p className="ml-2 text-sm font-medium text-green-500">+8%</p>
            </div>
            <p className="mt-1 text-xs text-gray-500">from last week</p>
          </div>
          <div className="rounded-full bg-[#3B82F6] bg-opacity-10 p-3">
            <FaUsers className="h-6 w-6 text-[#3B82F6]" />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white shadow-sm rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
            <div className="flex items-baseline mt-2">
              <p className="text-2xl font-semibold">$84,245</p>
              <p className="ml-2 text-sm font-medium text-green-500">+23%</p>
            </div>
            <p className="mt-1 text-xs text-gray-500">from last month</p>
          </div>
          <div className="rounded-full bg-[#3B82F6] bg-opacity-10 p-3">
            <FaMoneyBillWave className="h-6 w-6 text-[#3B82F6]" />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white shadow-sm rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Active Queries</p>
            <div className="flex items-baseline mt-2">
              <p className="text-2xl font-semibold">45</p>
              <p className="ml-2 text-sm font-medium text-red-500">+12</p>
            </div>
            <p className="mt-1 text-xs text-gray-500">new queries today</p>
          </div>
          <div className="rounded-full bg-[#3B82F6] bg-opacity-10 p-3">
            <FaQuestionCircle className="h-6 w-6 text-[#3B82F6]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetricCards