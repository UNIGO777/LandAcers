import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import ROUTES_NAME from "../../constants/routes";
import { useTheme } from "../../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpen]);

  const isHomePage = location.pathname === ROUTES_NAME.HOME;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? `bg-${theme}-background shadow-md text-${theme}-primary`
            : `bg-transparent text-white`
          : `bg-${theme}-background text-${theme}-text`
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className={`text-2xl font-bold ${isHomePage ? (scrolled ? `text-${theme}-primary` : "text-white") : `text-${theme}-text`}`}>
          <Link to={ROUTES_NAME.HOME}>LandsAcers</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className={`flex space-x-6 font-medium`}>
            <li>
              <Link
                to={ROUTES_NAME.HOME}
                className={`hover:text-${theme}-primary transition`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES_NAME.PROPERTIES}
                className={`hover:text-${theme}-primary transition`}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES_NAME.POST_A_PROPERTY}
                className={`hover:text-${theme}-primary transition`}
              >
               Post a Properties
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES_NAME.ABOUT}
                className={`hover:text-${theme}-primary transition`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES_NAME.CONTACT}
                className={`hover:text-${theme}-primary transition`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <Link
            to={ROUTES_NAME.LOGIN}
            className={`px-6 py-2 rounded-lg bg-${theme}-primary text-${theme}-background hover:bg-${theme}-secondary transition`}
          >
            Login
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`md:hidden text-${theme}-text focus:outline-none`}
          onClick={() => setNavOpen(!navOpen)}
        >
          <GiHamburgerMenu color={isHomePage && !scrolled ?'white':'black'} size={20} />
        </button>

        {/* Mobile Menu and Overlay */}
        {navOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setNavOpen(false)}
          ></div>
        )}
        <div
          className={`fixed top-0 right-0 h-full bg-${theme}-background shadow-lg w-3/4 transform ${
            navOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            className={`absolute top-4 right-4 text-${theme}-text`}
            onClick={() => setNavOpen(false)}
          >
            <IoClose size={24} />
          </button>
          <ul
            className={`flex flex-col space-y-6 mt-16 ml-6 text-${theme}-text font-medium`}
          >
            <li>
              <Link
                to={ROUTES_NAME.HOME}
                className={`hover:text-${theme}-primary transition`}
                onClick={() => setNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES_NAME.PROPERTIES}
                className={`hover:text-${theme}-primary transition`}
                onClick={() => setNavOpen(false)}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES_NAME.POST_A_PROPERTY}
                className={`hover:text-${theme}-primary transition`}
                onClick={() => setNavOpen(false)}
              >
                Post a Properties
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES_NAME.ABOUT}
                className={`hover:text-${theme}-primary transition`}
                onClick={() => setNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES_NAME.CONTACT}
                className={`hover:text-${theme}-primary transition`}
                onClick={() => setNavOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              {/* Login Button */}
              <Link
                to={ROUTES_NAME.LOGIN}
                className={`px-4 py-2 rounded-lg bg-${theme}-primary text-${theme}-background hover:bg-${theme}-secondary transition`}
                onClick={() => setNavOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
