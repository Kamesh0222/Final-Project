import React, { useState } from "react";
import LogoImg from "../assets/Logo.png";
import down from "../assets/svg/down.svg";
import hamburger from "../assets/svg/Hamburger.svg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-yellow-50 shadow-sm relative">
        <div className="flex max-w-[1440px] justify-between items-center px-4 py-5 mx-auto">
          <div className="flex space-x-6">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open Menu"
            >
              <img className="w-6 h-6" src={hamburger} alt="Menu Icon" />
            </button>

            {/* Company Logo */}
            <img className="h-10 w-28" src={LogoImg} alt="Company Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center relative">
            <div className="hidden lg:flex items-center space-x-5">
              {/* Browse Button with Modal */}
              <button
                className="text-black flex items-center hover:bg-gray-300 hover:bg-opacity-30 px-5 h-12 font-extralight"
                onClick={() => setIsModalOpen(true)}
              >
                Browse
                <span className="ml-3">
                  <img src={down} alt="Dropdown Icon" />
                </span>
              </button>

              <a
                href="#"
                className="text-black flex items-center px-5 h-12 hover:bg-gray-300 hover:bg-opacity-30 font-extralight"
              >
                Help
              </a>
              <a
                href="#"
                className="text-black flex items-center px-5 h-12 hover:bg-gray-300 hover:bg-opacity-30 font-extralight"
              >
                List your practice on Zocdoc
              </a>
              <div className="h-6 border-l border-gray-300 opacity-[0.1]"></div>

              {/* Log in Button */}
              <button
                className="text-black px-5 h-12 flex items-center hover:bg-gray-300 hover:bg-opacity-30 font-extralight"
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
              >
                Log in
                <span className="ml-3">
                  <img src={down} alt="Dropdown Icon" />
                </span>
              </button>

              {/* Sign Up Button */}
              <button
                className="bg-[#FFF04B] text-black rounded-[4px] px-5 h-12 font-extralight"
                onClick={() => navigate("/Signup")} 
              >
                Sign up
              </button>
            </div>

            {/* Login Dropdown */}
            {isLoginDropdownOpen && (
              <div className="absolute top-12 right-44 mt-2 w-2/5 bg-white rounded-md shadow-xl z-50 px-5 font-extralight">
                <div className="py-2">
                  <h1 className="text-black font-black py-2">Patients</h1>
                  <a className="hover:bg-gray-100 block py-2 px-2 rounded">
                    <p className="text-black font-light py-2">Log in</p>
                  </a>
                  <div className="border-b border-gray-300 my-3"></div>
                  <h1 className="text-black font-black py-2">Doctors</h1>
                  <a className="hover:bg-gray-100 block py-2 px-2 rounded">
                    <p className="text-black font-light py-2">Log in</p>
                  </a>
                </div>
              </div>
            )}

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="absolute top-0 left-0 w-full h-[50vh] bg-yellow-50 shadow-md lg:hidden flex flex-col items-center justify-center p-4 z-50">
                {/* Mobile Logo */}
                <img
                  className="absolute top-4 left-4 h-11 w-28"
                  src={LogoImg}
                  alt="Company Logo"
                />
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-black focus:outline-none"
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
                <h2 className="text-2xl font-semibold mb-6 ">
                  Welcome to Zocdoc
                </h2>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-full mb-4 hover:bg-yellow-600">
                  Sign up
                </button>
                <button className="border border-gray-700 text-black px-4 py-2 rounded-full mb-4 hover:bg-gray-100">
                  Log in
                </button>
                <a href="#" className="text-black hover:text-black mt-4">
                  Interested in{" "}
                  <span className="underline">listing your practice</span>?
                </a>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Modal for Browse Button */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Browse Options</h2>
              <button
                className="text-black focus:outline-none"
                onClick={() => setIsModalOpen(false)}
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
            </div>
            <div className="mt-4">
              <p>Here you can browse through different options!</p>
              <ul className="mt-2 space-y-2">
                <li className="hover:bg-gray-100 p-2 rounded">Option 1</li>
                <li className="hover:bg-gray-100 p-2 rounded">Option 2</li>
                <li className="hover:bg-gray-100 p-2 rounded">Option 3</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
