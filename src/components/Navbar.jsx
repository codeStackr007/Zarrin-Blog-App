import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
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
        {/* logo */}
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

        {/* desktop menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            to="/blog"
            className={`relative group font-medium transition-colors duration-200 hover:text-primary-700 focus:outline-none ${
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
            className={`relative group font-medium transition-colors duration-200 hover:text-primary-700 focus:outline-none ${
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
            className="h-6 w-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-200 dark:invert focus:outline-none"
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
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-none focus:outline-none"
          >
            Contact Us
          </Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden flex items-center space-x-3">
          {/* theme toggle for mobile */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 group flex items-center justify-center focus:outline-none"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* sun */}
              <svg
                className={`w-5 h-5 text-yellow-500 transition-all duration-300 ${
                  isDarkMode
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>

              {/* moon */}
              <svg
                className={`w-5 h-5 text-primary-400 absolute transition-all duration-300 ${
                  isDarkMode
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
              </svg>
            </div>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 focus:outline-none"
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

      {/* mobile dropdown */}
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
            className={`font-medium w-full py-1 transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none ${
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
            className={`font-medium w-full py-1 transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none ${
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
            className="flex items-center space-x-2 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 w-full py-1 transition-colors duration-200 focus:outline-none"
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
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 w-full text-center focus:outline-none"
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
