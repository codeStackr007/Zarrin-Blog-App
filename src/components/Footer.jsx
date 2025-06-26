import React from "react";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const navigate = useNavigate();
  // For external links, just scroll to top
  const handleExternalClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // For nav links, scroll instantly to top
  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <footer className="bg-white pt-0 pb-0 px-0 border-t border-primary-200">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto pt-10 pb-6">
        {/* Logo */}
        <img
          src={require("../assets/images/Logo.svg").default}
          alt="Zarrin Logo"
          className="h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto mb-6 object-contain cursor-pointer"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "auto" });
          }}
        />
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
          {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact Us" },
          ].map((link) => (
            <NavLink
              key={link.href + link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-gray-800 font-medium transition-colors duration-200 py-1 px-2 hover:text-primary-600` +
                (isActive ? " text-primary-600" : "")
              }
              end={link.href === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold w-9 h-9"
            onClick={handleExternalClick}
          >
            FB
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold w-9 h-9"
            onClick={handleExternalClick}
          >
            IG
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold w-9 h-9"
            onClick={handleExternalClick}
          >
            LN
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold w-9 h-9"
            onClick={handleExternalClick}
          >
            YT
          </a>
        </div>
        {/* Divider */}
        <div className="w-full mb-2 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
          <hr className="border-t border-primary-200" />
        </div>
        {/* Copyright */}
        <div className="text-center font-normal text-gray-700 text-sm pb-4 mt-4">
          Copyright Ideapeel Inc © {currentYear}. All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
