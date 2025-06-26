import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo on the left */}
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => navigate("/")}
          onKeyDown={(e) => e.key === "Enter" && navigate("/")}
          tabIndex={0}
          role="button"
          aria-label="Go to homepage"
        >
          <img
            src={require("../assets/images/Logo.svg").default}
            alt="Zarrin Logo"
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 max-w-full object-contain transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg dark:hidden"
          />
          <img
            src={require("../assets/images/Logo - Dark theme.svg").default}
            alt="Zarrin Logo"
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 max-w-full object-contain transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg hidden dark:block"
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/blog"
            className={`relative group font-medium transition-colors duration-200 hover:text-primary-700 ${
              location.pathname === "/blog"
                ? "text-primary-600"
                : "text-gray-900 dark:text-gray-100"
            }`}
            aria-current={location.pathname === "/blog" ? "page" : undefined}
          >
            Blog
            <span
              className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full ${
                location.pathname === "/blog" ? "w-full" : ""
              }`}
            ></span>
          </Link>
          <Link
            to="/about"
            className={`relative group font-medium transition-colors duration-200 hover:text-primary-700 ${
              location.pathname === "/about"
                ? "text-primary-600"
                : "text-gray-900 dark:text-gray-100"
            }`}
            aria-current={location.pathname === "/about" ? "page" : undefined}
          >
            About
            <span
              className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full ${
                location.pathname === "/about" ? "w-full" : ""
              }`}
            ></span>
          </Link>
          <button
            className="h-6 w-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-200 dark:invert focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
            aria-label="Search"
          >
            <img
              src={require("../assets/images/search-minus.svg").default}
              alt=""
              className="h-6 w-6"
            />
          </button>
          <Link
            to="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <img
                src={require("../assets/images/menu-icon.svg").default}
                alt=""
                className="h-8 w-8 dark:invert"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu with animation */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white/90 dark:bg-gray-900/80 border-b border-gray-100 dark:border-gray-800 shadow-sm origin-top transform-gpu transition-all duration-300 ease-in-out overflow-hidden backdrop-blur-md ${
          menuOpen
            ? "scale-y-100 opacity-100 max-h-[500px]"
            : "scale-y-0 opacity-0 max-h-0 pointer-events-none"
        }`}
        role="menu"
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col items-start px-6 py-4 space-y-4">
          <Link
            to="/blog"
            className={`font-medium w-full py-1 transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${
              location.pathname === "/blog"
                ? "text-primary-600 dark:text-primary-400"
                : "text-gray-900 dark:text-gray-100"
            }`}
            onClick={() => setMenuOpen(false)}
            aria-current={location.pathname === "/blog" ? "page" : undefined}
            role="menuitem"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className={`font-medium w-full py-1 transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${
              location.pathname === "/about"
                ? "text-primary-600 dark:text-primary-400"
                : "text-gray-900 dark:text-gray-100"
            }`}
            onClick={() => setMenuOpen(false)}
            aria-current={location.pathname === "/about" ? "page" : undefined}
            role="menuitem"
          >
            About
          </Link>
          <button
            className="flex items-center space-x-2 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 w-full py-1 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
          >
            <img
              src={require("../assets/images/search-minus.svg").default}
              alt=""
              className="h-6 w-6 mr-2 dark:invert"
            />
            <span>Search</span>
          </button>
          <Link
            to="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 w-full text-center"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
