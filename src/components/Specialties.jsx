import React from "react";
import Dentist from "../assets/Specialties/Dentist.png";
import PrimaryCare from "../assets/Specialties/Primary Care.png";
import OBGYN from "../assets/Specialties/OB-GYN.png";
import Dermatologist from "../assets/Specialties/Dermatologist.png";
import Psychiatrist from "../assets/Specialties/Psychiatrist.png";
import EyeDoctor from "../assets/Specialties/Eye Doctor.png";

const specialties = [
  { name: "Primary Care", imgSrc: PrimaryCare },
  { name: "Dentist", imgSrc: Dentist },
  { name: "OB-GYN", imgSrc: OBGYN },
  { name: "Dermatologist", imgSrc: Dermatologist },
  { name: "Psychiatrist", imgSrc: Psychiatrist },
  { name: "Eye Doctor", imgSrc: EyeDoctor },
];

const Specialties = () => {
  return (
    <section className="bg-white pt-16 pb-6 px-10 lg:px-20 md:px-8">
      <div className="max-w-full mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-2 text-left">
            Top-searched specialties
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 items-center mb-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-[#FFF0BB] border border-gray-300 p-4 rounded-md flex flex-col items-center justify-center w-52 h-56 hover:shadow-lg transition duration-300"
            >
              <img
                src={specialty.imgSrc}
                alt={specialty.name}
                className="w-28 h-28 mb-4"
              />
              <p className="font-medium text-gray-700">{specialty.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
