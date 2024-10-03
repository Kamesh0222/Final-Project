import React, { useState, useEffect } from "react";
import InsuranceImage from "../assets/Insurance";
import leftH from "../assets/Hero/Left.png";
import rightH from "../assets/Hero/Right.png";
import blink from "../assets/Hero/Design.png";
import Location from "../assets/Hero/Location.png";
import Plans from "../assets/Hero/Plans.png";
import SearchIcon from "../assets/Hero/Search.png";


const Hero = () => {
  const words = ["dentists", "doctors", "therapists", "specialists"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [words.length]);

  const insurances = InsuranceImage;

  return (
    <div>
      
      <section className="bg-yellow-50 py-16 px-4 pb-24 md:px-8 md:pt-10 max-lg:pb-5 relative flex flex-col items-center overflow-hidden">
        {/* Hero Section */}
        <div className="absolute hidden lg:flex top-5 left-[-225px] w-[450px]">
          <img
            className="max-w-full h-auto"
            src={leftH}
            alt="Decorative left hand"
          />
        </div>
        <div className="absolute hidden lg:flex top-5 xl:right-[-160px] w-[465px] lg:right-[-205px]">
          <img
            className="max-w-full h-auto"
            src={rightH}
            alt="Decorative right hand"
          />
        </div>

        <h1 className="font-normal text-[44px] text-center mb-8">
          Book local{" "}
          <span className="inline-block animate-fade">
            {words[currentWordIndex]}
          </span>{" "}
          <br /> who take your insurance
        </h1>

        {/* Desktop Search Bar with 70% width */}
        <div className="bg-white hidden lg:flex items-center rounded-full shadow-md w-[70%] mx-auto p-1">
          <SearchInput
            icon={SearchIcon}
            placeholder="Condition, procedure, doctor..."
            className="w-1/3 border-r border-gray-300"
          />
          <SearchInput
            icon={Location}
            placeholder="Chennai, TN"
            className="w-1/3 border-r border-gray-300"
          />
          <SearchInput
            icon={Plans}
            placeholder="Choose Insurance"
            className="w-1/3"
          />
          <button className="bg-[#FCE721] relative rounded-full p-3 ml-2 hover:bg-[#fde721] hover:shadow">
            <img src={SearchIcon} alt="Search icon" className="h-6 w-6" />
            <img
              className="absolute -bottom-5 -right-10 top-5 flex space-x-1"
              src={blink}
              alt="Blinking decorative image"
            />
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="hidden max-lg:flex flex-col w-full bg-white px-4 rounded-lg shadow-md mx-auto">
          <SearchInput
            icon={SearchIcon}
            placeholder="Condition, procedure, doctor..."
            className="border-b border-gray-300 py-2"
          />
          <SearchInput
            icon={Location}
            placeholder="Chennai, TN"
            className="border-b border-gray-300 py-2"
          />
          <SearchInput
            icon={Plans}
            placeholder="Choose insurance"
            className="py-2 mt-4"
          />
        </div>

        <div className="hidden max-lg:flex flex-col w-full mx-auto">
          <button className="w-full bg-[#FEF04B] text-black p-3 rounded-md mt-6 hover:bg-[#fde721] hover:shadow">
            Find care
          </button>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="bg-white pt-16 pb-3 px-10 lg:px-20 md:px-8">
        <div className="max-w-full mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-left">
              Find an in-network doctor from over 1,000 insurance plans
            </h2>
            <p className="text-gray-600 text-left">
              Add your insurance to see in-network primary care doctors
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            {insurances.map((insurance, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 p-4 rounded-lg flex items-center justify-center w-52 h-24"
              >
                <img
                  src={insurance}
                  alt={`Insurance logo ${index}`}
                  className="max-h-full max-w-full p-3"
                />
              </div>
            ))}
            <a
              href="#"
              className="bg-white rounded-lg flex items-center w-40 h-20 hover:underline pl-8"
            >
              See all(1,000+)
            </a>
          </div>

          <button className="px-6 py-2 bg-white border border-gray-500 rounded-md hover:bg-gray-100">
            Add your insurance coverage
          </button>
        </div>
      </section>
      
    </div>
  );
};


const SearchInput = ({ icon, placeholder, className }) => (
  <div className={`flex items-center px-4 ${className}`}>
    <img src={icon} alt="" className="h-6 w-6 mr-2" />
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 outline-none text-gray-700"
    />
  </div>
);

export default Hero;
