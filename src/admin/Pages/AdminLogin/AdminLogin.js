import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Link } from "react-router-dom"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4 bg-gray-50 lg:p-8">
      <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Form */}
        <div className="w-full max-w-md p-8 mx-auto bg-white shadow-xl rounded-3xl lg:p-12">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold text-gray-900">Welcome Back !</h1>
            <p className="text-gray-600">Sign in to continue to LandsAcers!</p>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center justify-center w-20 h-20 bg-indigo-500 rounded-full bg-opacity-10">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  fill="#6366F1"
                />
              </svg>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 placeholder-gray-400 text-gray-900"
                placeholder="Enter username"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 placeholder-gray-400 text-gray-900"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-400 transition-colors -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <div
                    className={`w-10 h-5 bg-gray-300 rounded-full shadow-inner transition-colors duration-300 ease-in-out ${rememberMe ? "bg-indigo-500" : ""}`}
                  >
                    <div
                      className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${rememberMe ? "translate-x-5" : "translate-x-1"} top-0.5`}
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-600">Keep me logged in</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-indigo-600 transition-colors hover:text-indigo-500">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2.5 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 font-medium"
            >
              Login
            </button>
          </form>

          {/* Copyright */}
          <p className="mt-8 text-sm text-center text-gray-500">© 2025 LandsAcers!</p>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden shadow-xl rounded-3xl">
            <img
              src="https://media.istockphoto.com/id/1370591114/photo/real-estate-agent-showing-a-house-to-a-couple.jpg?s=2048x2048&w=is&k=20&c=EDRBuXq_vGhmO1W4cTFcTAYuFuAyGnwu302aOXG1rek="
              alt="Woman working on laptop"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-indigo-500 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Login;

