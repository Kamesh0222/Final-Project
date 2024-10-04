import React from "react";
import Logo from "../assets/Logo.png";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <section className="min-h-screen flex flex-col items-center">
      {/* Container for the logo */}
      <div className="w-full py-6">
        <div className="container mx-auto flex pl-14">
          <img src={Logo} alt="Zocdoc logo" className="h-10 w-auto" />
        </div>
      </div>

      {/* Form Container */}
      <div className="flex-grow flex justify-center items-center w-full max-w-xl h-[120vh] p-8">
        {/* Form */}
        <div className="w-full">
          {/* Title */}
          <h1 className="text-4xl text-[#333333] mb-8">Create an account</h1>

          {/* Form */}
          <form>
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-[#333333]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-lg shadow-sm focus:outline-none focus:ring-[#FFF04B] focus:border-[#FFF04B]"
                  required
                />
              </div>

              {/* Legal First Name and Last Name */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-lg font-medium text-[#333333]"
                  >
                    Legal first name <span className="text-gray-500">ⓘ</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-lg shadow-sm focus:outline-none focus:ring-[#FFF04B] focus:border-[#FFF04B]"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-lg font-medium text-[#333333]"
                  >
                    Legal last name <span className="text-gray-500">ⓘ</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-lg shadow-sm focus:outline-none focus:ring-[#FFF04B] focus:border-[#FFF04B]"
                    required
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-lg font-medium text-[#333333]"
                >
                  Date of birth
                </label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  placeholder="dd/mm/yyyy"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-lg shadow-sm focus:outline-none focus:ring-[#FFF04B] focus:border-[#FFF04B]"
                  required
                />
              </div>

              {/* Sex */}
              <div>
                <label
                  htmlFor="sex"
                  className="block text-lg font-medium text-[#333333]"
                >
                  Sex <span className="text-gray-500">ⓘ</span>
                </label>
                <div className="mt-3 flex flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="sex"
                      value="male"
                      className="form-radio text-[#FFF04B] h-4 w-4"
                    />
                    <span className="ml-3 text-lg">Male</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      name="sex"
                      value="female"
                      className="form-radio text-[#FFF04B] h-4 w-4"
                    />
                    <span className="ml-3 text-lg">Female</span>
                  </label>
                </div>
              </div>

              {/* Optional Gender Info */}
              <div>
                <a href="#" className="text-[#333333] underline text-lg">
                  Add more sex & gender info (optional)
                </a>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#FFF04B] text-black font-bold text-lg rounded-md hover:bg-[#FFCC00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFF04B]"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>

          {/* Separator */}
          <div className="my-8 flex items-center justify-center">
            <span className="border-b border-gray-300 w-1/4"></span>
            <span className="px-3 text-gray-400">or</span>
            <span className="border-b border-gray-300 w-1/4"></span>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button className="w-full py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center space-x-3 hover:bg-gray-100">
              <img
                src="https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png"
                alt="Google"
                className="h-5 w-5"
              />
              <span className="text-lg text-[#333333]">
                Continue with Google
              </span>
            </button>
            <button className="w-full py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center space-x-3 hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="h-5 w-5"
              />
              <span className="text-lg text-[#333333]">
                Continue with Apple
              </span>
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <span className="text-lg text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-[#333333] underline">
                Log in
              </a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Signup;
