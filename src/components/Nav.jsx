import React, { useState } from "react";
import logo from "../assets/Logo.png";
import Down from "../assets/svg/down.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-[#FDFAEE] sm:sticky">
      <div className="flex items-center justify-center md:pl-10 gap-6">
        {!isOpen && (
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none mt-4"
            >
              <svg
                className="w-5 h-5"
                fill="#000000"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z"
                  fill="#333333"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Zocdoc Logo"
            className="h-12 w-12 rounded-full bg-[#FFF04B] p-1"
          />
          <span className="text-lg font-bold text-gray-800">Zocdoc</span>
        </div>

        {isOpen && (
          <div className="h-auto">
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.354 4.646a.5.5 0 0 1 0 .708L13.414 12l5.94 5.646a.5.5 0 0 1-.707.707L12 12.707l-5.646 5.646a.5.5 0 1 1-.707-.707L11.586 12 5.646 6.354a.5.5 0 1 1 .707-.707L12 11.293l5.646-5.646a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex items-center space-x-12">
        <div className="relative">
          <a
            href="#"
            className="flex items-center text-gray-700 hover:bg-gray-500 hover:bg-opacity-20 transition-colors duration-200 px-6 py-3 rounded-md"
          >
            Browse
            <img src={Down} alt="Dropdown" className="ml-1 w-4 h-4" />
          </a>
        </div>
        <a
          href="#"
          className="text-gray-700 hover:bg-gray-500 hover:bg-opacity-20 transition-colors duration-200 px-6 py-3 rounded-md"
        >
          Help
        </a>
        <a
          href="#"
          className="text-gray-700 hover:bg-gray-500 hover:bg-opacity-20 transition-colors duration-200 px-6 py-3 rounded-md"
        >
          List your practice on Zocdoc
        </a>
        <div className="border-l h-6 border-gray-300 mx-4"></div>
        <div className="relative flex items-center space-x-2">
          <button className="flex items-center text-gray-700 hover:bg-gray-500 hover:bg-opacity-20 transition-colors duration-200 px-6 py-3 rounded-md">
            Log in
            <img src={Down} alt="Dropdown" className="ml-1 w-4 h-4" />
          </button>
          <button className="bg-[#FFF04B] text-gray-800 px-6 py-3 rounded-md shadow hover:bg-yellow-300 transition-colors duration-200">
            Sign up
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FDFAEE] md:hidden text-center p-6 flex flex-col items-center">
          <div className="flex flex-col space-y-4 mb-4 mt-6 w-10/12">
            <h2 className="text-xl mb-1 text-start">
              Welcome to Zocdoc
            </h2>
            <button className="bg-[#FFF04B] text-gray-800 w-full px-4 py-4 rounded-md shadow hover:bg-yellow-300 transition-colors duration-200">
              Sign up
            </button>
            <button className="border border-gray-300 text-gray-700 w-full px-4 py-4 rounded-md shadow hover:bg-gray-200 transition-colors duration-200">
              Log in
            </button>
          </div>
          <p className="text-gray-700">
            Interested in{" "}
            <span className="underline">listing your practice?</span>
          </p>
        </div>
      )}
    </nav>
  );
};

export default Nav;