import React from "react";

const CreateAccount = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#FAFAFA]">
      {/* Container for the form */}
      <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="logo.png" 
            alt="Zocdoc logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-[#333333] mb-8">
          Create an account
        </h1>

        {/* Form */}
        <form>
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#333333]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-[#FFF04B] focus:border-[#FFF04B] sm:text-sm"
                required
              />
            </div>

            {/* Legal First Name and Last Name */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-[#333333]">
                  Legal first name{" "}
                  <span className="text-gray-500">ⓘ</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-[#FFF04B] focus:border-[#FFF04B] sm:text-sm"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium text-[#333333]">
                  Legal last name{" "}
                  <span className="text-gray-500">ⓘ</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-[#FFF04B] focus:border-[#FFF04B] sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-[#333333]">
                Date of birth
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="dd/mm/yyyy"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-[#FFF04B] focus:border-[#FFF04B] sm:text-sm"
                required
              />
            </div>

            {/* Sex */}
            <div>
              <label htmlFor="sex" className="block text-sm font-medium text-[#333333]">
                Sex{" "}
                <span className="text-gray-500">ⓘ</span>
              </label>
              <div className="mt-2 space-y-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    className="form-radio text-[#FFF04B] h-4 w-4"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="female"
                    className="form-radio text-[#FFF04B] h-4 w-4"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            {/* Optional Gender Info */}
            <div>
              <a href="#" className="text-[#333333] underline text-sm">
                Add more sex & gender info (optional)
              </a>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#FFF04B] text-black font-semibold text-sm rounded-md hover:bg-[#FFCC00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFF04B]"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateAccount;
