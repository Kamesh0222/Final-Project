import React from "react";
import MedStarHealthLogo from "../assets/TrustedByHealthSystems/MedStarHealth.png";
import MountSinaiLogo from "../assets/TrustedByHealthSystems/MountSinai.png";
import TuftsLogo from "../assets/TrustedByHealthSystems/Tufts.png";
import MontefioreLogo from "../assets/TrustedByHealthSystems/Montefiore.png";
import IntermountainHealthLogo from "../assets/TrustedByHealthSystems/IntermountainHealth.png";
import MethodistLogo from "../assets/TrustedByHealthSystems/Methodist.png";

const TrustedByHealthSystems = () => {
  return (
    <section className="p-20">
      {/* Left Section */}
      <div className="bg-[#FAFAFA] flex flex-col lg:flex-row justify-center items-center h-[40vh] py-12 px-4 lg:px-16">
        <div className="text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2">
          <p className="text-base text-[#333333] mb-2">
            Zocdoc for health systems
          </p>
          <h2 className="text-2xl font-semibold text-[#333333] mb-6">
            We’re trusted by top health systems
          </h2>
          <button className="bg-[#FFF04B] text-black font-medium py-3 px-6 rounded-md hover:bg-[#FFCC00]">
            Partner with Zocdoc
          </button>
        </div>
        {/* Right Section - Logos */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:w-1/2">
          <img
            src={MedStarHealthLogo}
            alt="MedStar Health"
            className="h-12 w-auto"
          />
          <img src={MountSinaiLogo} alt="Mount Sinai" className="h-12 w-auto" />
          <img
            src={TuftsLogo}
            alt="Tufts Medical Center"
            className="h-12 w-auto"
          />
          <img src={MontefioreLogo} alt="Montefiore" className="h-12 w-auto" />
          <img
            src={IntermountainHealthLogo}
            alt="Intermountain Health"
            className="h-12 w-auto"
          />
          <img
            src={MethodistLogo}
            alt="Houston Methodist"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedByHealthSystems;
