import React, { useState } from "react";

const citiesData = [
  {
    name: "New York City",
    dropdownItems: [
      "New York City Doctors",
      "New York City Dentists",
      "New York City Pediatric Dentists",
      "New York City Pediatricians",
      "New York City Dermatologists",
      "New York City OB-GYNs",
      "New York City Psychiatrists",
      "New York City Therapists",
      "New York City Eye Doctors",
      "New York City ENT Doctors",
      "New York City Urgent Care",
      "New York City Medicare",
      "New York City Hospitals",
    ],
  },
  {
    name: "Brooklyn",
    dropdownItems: ["Brooklyn Doctors", "Brooklyn Dentists"],
  },
  { name: "Queens", dropdownItems: ["Queens Doctors", "Queens Dentists"] },
  { name: "Bronx", dropdownItems: ["Bronx Doctors", "Bronx Dentists"] },
  {
    name: "Long Island",
    dropdownItems: ["Long Island Doctors", "Long Island Dentists"],
  },
  {
    name: "Baltimore",
    dropdownItems: ["Baltimore Doctors", "Baltimore Dentists"],
  },
  {
    name: "Washington, DC",
    dropdownItems: ["Washington, DC Doctors", "Washington, DC Dentists"],
  },
  { name: "Seattle", dropdownItems: ["Seattle Doctors", "Seattle Dentists"] },
  { name: "Atlanta", dropdownItems: ["Atlanta Doctors", "Atlanta Dentists"] },
  { name: "Denver", dropdownItems: ["Denver Doctors", "Denver Dentists"] },
  {
    name: "Philadelphia",
    dropdownItems: ["Philadelphia Doctors", "Philadelphia Dentists"],
  },
  { name: "Houston", dropdownItems: ["Houston Doctors", "Houston Dentists"] },
  { name: "Dallas", dropdownItems: ["Dallas Doctors", "Dallas Dentists"] },
  { name: "Austin", dropdownItems: ["Austin Doctors", "Austin Dentists"] },
  { name: "Chicago", dropdownItems: ["Chicago Doctors", "Chicago Dentists"] },
  { name: "Boston", dropdownItems: ["Boston Doctors", "Boston Dentists"] },
  {
    name: "San Francisco",
    dropdownItems: ["San Francisco Doctors", "San Francisco Dentists"],
  },
  { name: "Miami", dropdownItems: ["Miami Doctors", "Miami Dentists"] },
  {
    name: "Los Angeles",
    dropdownItems: ["Los Angeles Doctors", "Los Angeles Dentists"],
  },
  {
    name: "San Diego",
    dropdownItems: ["San Diego Doctors", "San Diego Dentists"],
  },
];

const CityDropdown = ({ city }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col pb-4">
      {/* Toggle button */}
      <div
        className="flex justify-between items-center cursor-pointer text-[#333333] text-base font-extralight pb-4 border-b-[0.5px] m-2 border-gray-700"
        onClick={toggleDropdown}
      >
        <span>{city.name}</span>
        <span
          className={`text-xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="17"
            height="25"
            viewBox="0 0 17 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.46263 7.47852L0.0322266 8.91825L8.03263 16.9088L16.0318 8.90985L14.6014 7.47972L8.03263 14.0473L1.46263 7.47852Z"
              fill="#333333"
            />
          </svg>
        </span>
      </div>
      {/* Dropdown content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="mt-2 p-2 w-full flex flex-col space-y-1 max-h-48 overflow-auto border border-gray-300">
          {city.dropdownItems.map((item, index) => (
            <a href="#" key={index} className="text-sm text-[#333] underline">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const FindDoctorsByCity = () => {
  return (
    <section className="bg-[#FFF4C3] py-16 px-6 lg:px-16">
      <h2 className="text-xl font-medium text-[#333333] mb-10">
        Find doctors and dentists by city
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6">
        {citiesData.map((city, index) => (
          <CityDropdown key={index} city={city} />
        ))}
      </div>
    </section>
  );
};

export default FindDoctorsByCity;
