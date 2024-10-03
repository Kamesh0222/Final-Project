import React from "react";
import DoctorImage from "../assets/PracticePromo/DoctorImage.png";

const PracticePromo = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center py-16 px-10 lg:px-20">
      {/* Left Section - Doctor Image */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <img
          src={DoctorImage}
          alt="Doctor working on laptop"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Section - Text and Button */}
      <div className="w-full lg:w-1/2 lg:pl-10">
        <h3 className="text-lg font-light text-[#333333] mb-4">
          Zocdoc for private practices
        </h3>
        <h2 className="text-2xl font-semibold text-[#333333] mb-6">
          Are you a provider interested in reaching new patients?
        </h2>
        <ul className="text-base text-[#333333] font-light mb-6 space-y-2 list-none">
          <li>
            <span className="font-bold text-lg mr-2">•</span>
            Reach patients in your area looking for a new provider
          </li>
          <li>
            <span className="font-bold text-lg mr-2">•</span>
            Fill last-minute openings in your schedule
          </li>
          <li>
            <span className="font-bold text-lg mr-2">•</span>
            Strengthen your online reputation with verified reviews
          </li>
        </ul>

        <button className="bg-[#FFF04B] font-light py-3 px-6 rounded-sm hover:bg-[#f7e847]">
          List your practice on Zocdoc
        </button>
      </div>
    </section>
  );
};

export default PracticePromo;
