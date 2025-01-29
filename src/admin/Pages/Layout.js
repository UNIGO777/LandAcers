import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaQuestionCircle,
  FaMoneyBillWave,
  FaUserCog,
  FaUserTie,
  FaBars,
  FaTimes,
  FaBell,
  FaCog,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})
  const location = useLocation()

  const navigationItems = [
    { icon: FaHome, label: "Home", path: "/admin/dashboard" },
    {
      icon: FaUsers,
      label: "Users",
      path: "/users",
      subItems: [
        { label: "Manage Users", path: "/admin/users/manage" },
      ],
    },
    {
      icon: FaUserTie,
      label: "Brokers",
      path: "/brokers",
      subItems: [
        { label: "Manage Brokers", path: "/admin/brokers/manage" },
      ],
    },
    {
      icon: FaBuilding,
      label: "Properties",
      path: "/properties",
      subItems: [
        { label: "All Properties", path: "/admin/properties/all" },
        { label: "Manage Property", path: "/admin/properties/manage/:id" },
        { label: "Add Property", path: "/admin/property/add" },
      ],
    },
    {
      icon: FaQuestionCircle,
      label: "Queries",
      path: "/queries",
      subItems: [
        { label: "Manage Queries", path: "/admin/queries/manage" },
      ],
    },
    { icon: FaMoneyBillWave, label: "Payments", path: "/payments" },
    { icon: FaUserCog, label: "Settings", path: "/settings" },
  ]

  const toggleExpanded = (label) => {
    setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  const subMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const renderNavigationItems = (items, mobile = false) => (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
          className="mb-2"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 hover:bg-[#3B82F6] hover:text-white cursor-pointer transition-all duration-200 ${
              location.pathname === item.path ? "bg-[#3B82F6] text-white" : ""
            } ${mobile ? "text-sm" : ""}`}
            onClick={() => (item.subItems ? toggleExpanded(item.label) : null)}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 10 }}
                className={`h-5 w-5 ${location.pathname === item.path ? "animate-pulse" : ""}`}
              >
                <item.icon />
              </motion.div>
              <span>{item.label}</span>
            </div>
            {item.subItems && (
              <motion.div animate={{ rotate: expandedItems[item.label] ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {expandedItems[item.label] ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </motion.div>
            )}
          </motion.div>
          <AnimatePresence>
            {item.subItems && expandedItems[item.label] && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={subMenuVariants}
                className={`ml-8 mt-1 space-y-1 ${mobile ? "text-sm" : ""}`}
              >
                {item.subItems.map((subItem) => (
                  <motion.div
                    key={subItem.label}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Link
                      to={subItem.path}
                      className={`block rounded-lg px-4 py-1.5 text-gray-600 hover:text-[#3B82F6] transition-all duration-200 ${
                        location.pathname === subItem.path ? "bg-blue-100 text-[#3B82F6]" : ""
                      }`}
                      onClick={() => mobile && setIsMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -256 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 z-20 hidden w-64 h-full transition-all duration-300 ease-in-out bg-white border-r shadow-lg lg:block"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex h-16 items-center justify-center border-b bg-[#3B82F6]"
        >
          <h1 className="text-xl font-bold text-white">LandsAcers</h1>
        </motion.div>
        <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
          {renderNavigationItems(navigationItems)}
        </nav>
      </motion.aside>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-600"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg"
            >
              <div className="flex h-16 items-center justify-between border-b bg-[#3B82F6] px-6">
                <h1 className="text-lg font-bold text-white">Property Admin</h1>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white transition-colors duration-200 rounded-md hover:bg-blue-600"
                >
                  <FaTimes className="w-6 h-6" />
                </motion.button>
              </div>
              <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
                {renderNavigationItems(navigationItems, true)}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen lg:pl-64">
        {/* Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="sticky top-0 z-10 flex items-center h-16 gap-4 px-4 bg-white border-b shadow-md lg:px-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-gray-400 transition-colors duration-200 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <FaBars className="w-6 h-6" />
          </motion.button>
          <div className="flex items-center flex-1 gap-4">
            <div className="relative flex-1 max-w-xl">
              <FaSearch className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <motion.input
                initial={{ width: "90%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3 }}
                type="search"
                placeholder="Search properties, users, brokers..."
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 text-gray-400 transition-colors duration-200 rounded-full hover:bg-gray-100"
            >
              <FaBell className="w-5 h-5" />
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1 animate-ping"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 transition-colors duration-200 rounded-full hover:bg-gray-100"
            >
              <FaCog className="w-5 h-5" />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="h-8 w-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <span className="text-sm font-medium">A</span>
            </motion.div>
          </div>
        </motion.header>

        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-grow p-4 bg-gray-100 lg:p-8"
        >
          {children}
        </motion.main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="px-8 py-4 text-sm text-center text-gray-500 bg-white border-t"
        >
          © 2023 LandsAcers. All rights reserved.
        </motion.footer>
      </div>
    </div>
  )
}

export default Layout

