import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import ROUTES_NAME from "../../constants/routes";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const location = useLocation(); 



  return (
    <footer
      className={`w-full py-10  transition-all duration-300 bg-${theme}-primary text-white cursor-pointer `}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-lg  font-bold mb-4 md:mb-0">Subscribe To Our Newsletter</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className={`p-2 rounded-l-lg text-back`}
            />
            <button className={`p-2 bg-white border text-black rounded-r-lg`}>
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES_NAME.HOME}
                  className={`hover:text-white cursor-pointer transition`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES_NAME.ABOUT}
                  className={`hover:text-white cursor-pointer transition`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES_NAME.CONTACT}
                  className={`hover:text-white cursor-pointer transition`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Service */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Our Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES_NAME.PROPERTIES}
                  className={`hover:text-white cursor-pointer transition`}
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES_NAME.POST_A_PROPERTY}
                  className={`hover:text-white cursor-pointer transition`}
                >
                  Post a Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Call us via: +91 96077 41454</p>
            <p className="text-sm">Email: contact@example.com</p>
          </div>
        </div>

        {/* Footer Text */}
        <div className={`text-center mt-8 text-sm text-white cursor-pointer`}>
          &copy; {new Date().getFullYear()} LandsAcers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
