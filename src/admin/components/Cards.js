import { FaHome, FaMoneyBillWave, FaChartLine } from "react-icons/fa"
import { motion } from "framer-motion"

const MetricCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-6 transition-all duration-300 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl hover:shadow-xl hover:scale-105"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-100">Total Properties</p>
            <div className="flex items-baseline mt-2">
              <p className="text-3xl font-bold text-white">2,453</p>
              <p className="ml-2 text-sm font-medium text-blue-200">+12%</p>
            </div>
            <p className="mt-1 text-xs text-blue-200">from last month</p>
          </div>
          <div className="p-3 bg-white rounded-full bg-opacity-30">
            <FaHome className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="w-full h-2 mt-4 overflow-hidden bg-blue-200 rounded-full bg-opacity-30">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-white rounded-full"
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 transition-all duration-300 shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl hover:shadow-xl hover:scale-105"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-yellow-100">Total Revenue</p>
            <div className="flex items-baseline mt-2">
              <p className="text-3xl font-bold text-white">$84,245</p>
              <p className="ml-2 text-sm font-medium text-yellow-200">+23%</p>
            </div>
            <p className="mt-1 text-xs text-yellow-200">from last month</p>
          </div>
          <div className="p-3 bg-white rounded-full bg-opacity-30">
            <FaMoneyBillWave className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="w-full h-2 mt-4 overflow-hidden bg-yellow-200 rounded-full bg-opacity-30">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-white rounded-full"
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-6 transition-all duration-300 shadow-lg bg-gradient-to-br from-green-500 to-green-600 rounded-xl hover:shadow-xl hover:scale-105"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-green-100">This Month's Revenue</p>
            <div className="flex items-baseline mt-2">
              <p className="text-3xl font-bold text-white">$32,580</p>
              <p className="ml-2 text-sm font-medium text-green-200">+15%</p>
            </div>
            <p className="mt-1 text-xs text-green-200">compared to last month</p>
          </div>
          <div className="p-3 bg-white rounded-full bg-opacity-30">
            <FaChartLine className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="w-full h-2 mt-4 overflow-hidden bg-green-200 rounded-full bg-opacity-30">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-white rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default MetricCards

