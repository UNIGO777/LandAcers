import { useState } from "react"
import { Link } from "react-router-dom"
import { FaHome, FaUsers, FaBuilding, FaQuestionCircle, FaMoneyBillWave, FaUserCog, FaUserTie, FaBars, FaTimes, FaBell, FaCog, FaSearch } from "react-icons/fa"

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed top-0 left-0 z-20 hidden w-64 h-full bg-white border-r lg:block">
        <div className="flex items-center h-16 px-6 border-b">
          <h1 className="text-lg font-semibold text-[#3B82F6]">Property Admin</h1>
        </div>
        <nav className="p-4 space-y-1">
          {navigationItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.path}
                className="flex items-center space-x-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-[#3B82F6] hover:text-white"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
              {item.subItems && (
                <div className="mt-1 ml-8 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.path}
                      className="block rounded-lg px-4 py-1.5 text-sm text-gray-500 hover:text-[#3B82F6]"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white">
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <h1 className="text-lg font-semibold text-[#3B82F6]">Property Admin</h1>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-4 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center space-x-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-[#3B82F6] hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
                {item.subItems && (
                  <div className="mt-1 ml-8 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block rounded-lg px-4 py-1.5 text-sm text-gray-500 hover:text-[#3B82F6]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center h-16 gap-4 px-4 bg-white border-b lg:px-8">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-gray-400 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <FaBars className="w-6 h-6" />
          </button>
          <div className="flex items-center flex-1 gap-4">
            <div className="relative">
              <FaSearch className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="search"
                placeholder="Search properties, users, brokers..."
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] lg:w-96"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 rounded-full hover:bg-gray-100">
              <FaBell className="w-5 h-5" />
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1"></span>
            </button>
            <button className="p-2 text-gray-400 rounded-full hover:bg-gray-100">
              <FaCog className="w-5 h-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center">
              <span className="text-sm font-medium">A</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  )
}

export default Layout

