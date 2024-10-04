import React from "react";
import JobImage from "../assets/jobImage.png"; 
const JobPromo = () => {
  return (
    <section className="bg-[#FFF4C3] h-[60vh] flex items-center justify-center relative">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white rounded-lg shadow-md p-8 h-[50Vh] relative z-10 w-[90%]">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h3 className="text-lg font-medium text-[#333333] mb-2">
            Zocdoc jobs
          </h3>
          <h2 className="text-3xl lg:text-3xl font-extralight text-[#333333] mb-6 leading-tight">
            Join us, and help <br />
            <span>transform healthcare for everyone.</span>
          </h2>
          <button className="bg-[#FFF04B] text-black font-medium py-3 px-6 rounded-md hover:bg-[#FFCC00] transition">
            View job openings
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="relative lg:w-3/6">
          <img
            src={JobImage}
            alt="Job Promo"
            className="absolute -top-[35.8vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default JobPromo;
