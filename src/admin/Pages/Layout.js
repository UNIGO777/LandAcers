import { useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
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
  FaChevronUp
} from 'react-icons/fa'

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})
  const location = useLocation()

  const navigationItems = [
    { icon: FaHome, label: "Dashboard", path: "/" },
    {
      icon: FaUsers,
      label: "User Management",
      path: "/users",
      subItems: [
        { label: "All Users", path: "/users/all" },
        { label: "Manage Users", path: "/users/manage" },
      ],
    },
    {
      icon: FaUserTie,
      label: "Broker Management",
      path: "/brokers",
      subItems: [
        { label: "All Brokers", path: "/brokers/all" },
        { label: "Manage Brokers", path: "/brokers/manage" },
      ],
    },
    {
      icon: FaBuilding,
      label: "Property Management",
      path: "/properties",
      subItems: [
        { label: "All Properties", path: "/properties/all" },
        { label: "Manage Property", path: "/properties/manage-property" },
        { label: "Add Property", path: "/properties/add-property" },
        { label: "Property Status", path: "/properties/property-status" },
      ],
    },
    { icon: FaQuestionCircle, label: "Query Management", path: "/queries",
      subItems:[
        {label : "All Queries", path: "/queries/all-queries"},
        {label : "Manage Queries", path: "/queries/manage-queries"}
      ]
     },
    { icon: FaMoneyBillWave, label: "Payment Management", path: "/payments" },
    { icon: FaUserCog, label: "Settings", path: "/settings" },
  ]

  const toggleExpanded = (label) => {
    setExpandedItems(prev => ({ ...prev, [label]: !prev[label] }))
  }

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [location])
  
  const renderNavigationItems = (items, mobile = false) => (
    <>
      {items.map((item) => (
        <div key={item.label} className="mb-2">
          <div
            className={`flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 hover:bg-[#3B82F6] hover:text-white cursor-pointer transition-all duration-200 ${
              location.pathname === item.path ? "bg-[#3B82F6] text-white" : ""
            } ${mobile ? "text-sm" : ""}`}
            onClick={() => (item.subItems ? toggleExpanded(item.label) : null)}
          >
            <div className="flex items-center space-x-3">
              <item.icon className={`h-5 w-5 ${location.pathname === item.path ? "animate-pulse" : ""}`} />
              <span>{item.label}</span>
            </div>
            {item.subItems &&
              (expandedItems[item.label] ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />)}
          </div>
          {item.subItems && expandedItems[item.label] && (
            <div className={`ml-8 mt-1 space-y-1 ${mobile ? "text-sm" : ""}`}>
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.label}
                  to={subItem.path}
                  className={`block rounded-lg px-4 py-1.5 text-gray-600 hover:text-[#3B82F6] transition-all duration-200 ${
                    location.pathname === subItem.path ? "bg-blue-100 text-[#3B82F6]" : ""
                  }`}
                  onClick={() => mobile && setIsMobileMenuOpen(false)}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-20 hidden w-64 h-full transition-all duration-300 ease-in-out bg-white border-r shadow-lg lg:block">
        <div className="flex h-16 items-center justify-center border-b bg-[#3B82F6]">
          <h1 className="text-xl font-bold text-white">Property Admin</h1>
        </div>
        <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
          {renderNavigationItems(navigationItems)}
        </nav>
      </aside>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-16 items-center justify-between border-b bg-[#3B82F6] px-6">
            <h1 className="text-lg font-bold text-white">Property Admin</h1>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white transition-colors duration-200 rounded-md hover:bg-blue-600"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
            {renderNavigationItems(navigationItems, true)}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center h-16 gap-4 px-4 bg-white border-b shadow-md lg:px-8">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-gray-400 transition-colors duration-200 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <FaBars className="w-6 h-6" />
          </button>
          <div className="flex items-center flex-1 gap-4">
            <div className="relative flex-1 max-w-xl">
              <FaSearch className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="search"
                placeholder="Search properties, users, brokers..."
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 transition-colors duration-200 rounded-full hover:bg-gray-100">
              <FaBell className="w-5 h-5" />
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1 animate-ping"></span>
            </button>
            <button className="p-2 text-gray-400 transition-colors duration-200 rounded-full hover:bg-gray-100">
              <FaCog className="w-5 h-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <span className="text-sm font-medium">A</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow p-4 bg-gray-100 lg:p-8">{children}</main>

        {/* Footer */}
        <footer className="px-8 py-4 text-sm text-center text-gray-500 bg-white border-t">
          © 2023 Property Admin. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default Layout
