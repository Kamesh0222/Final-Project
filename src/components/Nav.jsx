import React, { useState } from "react";
import LogoImg from "../assets/Logo.png";
import down from "../assets/svg/down.svg";
import hamburger from "../assets/svg/Hamburger.svg";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-50 shadow-sm">
      <div className="flex max-w-[1440px] justify-between items-center px-4 py-5 mx-auto">
        <div className="flex space-x-6">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open Menu"
          >
            <img className="w-6 h-6" src={hamburger} alt="Menu Icon" />
          </button>

          {/* Company Logo */}
          <img className="h-11 w-28" src={LogoImg} alt="Company Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="flex items-center">
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href="#"
              className="text-gray-700 flex items-center hover:bg-slate-100 px-5 h-12"
            >
              Browse
              <span className="ml-3">
                <img src={down} alt="Dropdown Icon" />
              </span>
            </a>
            <a href="#" className="text-gray-700 flex items-center px-5 h-12">
              Help
            </a>
            <a href="#" className="text-gray-700 flex items-center px-5 h-12">
              List your practice on Zocdoc
            </a>
            <div className="h-6 border-l border-gray-300 opacity-[0.1]"></div>
            <button className="text-gray-700 px-5 h-12 flex items-center">
              Log in
              <span className="ml-3">
                <img src={down} alt="Dropdown Icon" />
              </span>
            </button>
            <button className="bg-[#FFF04B] text-black rounded-[4px] px-5 h-12">
              Sign up
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-yellow-50 shadow-md lg:hidden flex flex-col items-center justify-center p-4 z-50">
              {/* Mobile Logo */}
              <img className="absolute top-4 left-4 h-11 w-28" src={LogoImg} alt="Company Logo" />
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-700 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Mobile Menu Content */}
              <h2 className="text-2xl font-semibold mb-6">Welcome to Zocdoc</h2>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-full mb-4 hover:bg-yellow-600">
                Sign up
              </button>
              <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded-full mb-4 hover:bg-gray-100">
                Log in
              </button>
              <a href="#" className="text-gray-700 hover:text-black mt-4">
                Interested in <span className="underline">listing your practice</span>?
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
