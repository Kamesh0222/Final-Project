import React, { useState } from "react";

const visitReasonsData = [
  {
    name: "Medical",
    dropdownItems: [
      "Physical Exam",
      "Flu Shot",
      "Blood Pressure Check",
      "Other Medical Reason",
    ],
  },
  {
    name: "Dental",
    dropdownItems: [
      "Teeth Cleaning",
      "Dental Checkup",
      "Tooth Pain",
      "Other Dental Reason",
    ],
  },
  {
    name: "Mental Health",
    dropdownItems: [
      "Therapy",
      "Consultation",
      "Mental Health Checkup",
      "Other Mental Health Reason",
    ],
  },
  {
    name: "Vision",
    dropdownItems: [
      "Eye Exam",
      "Vision Checkup",
      "Contact Lens Consultation",
      "Other Vision Reason",
    ],
  },
];

const VisitReasonDropdown = ({ reason }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col pb-2">
      {/* Dropdown Toggle */}
      <div
        className="flex justify-between items-center cursor-pointer text-[#333333] text-base font-light pb-4 px-4 border-b-[1px] border-gray-300"
        onClick={toggleDropdown}
      >
        <span>{reason.name}</span>
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

      {/* Dropdown Items */}
      {isOpen && reason.dropdownItems && (
        <div className="absolute z-10 bg-white mt-2 px-4 py-2 w-[90%] shadow-lg flex flex-col space-y-1 max-h-48 overflow-auto border border-gray-300">
          {reason.dropdownItems.map((item, index) => (
            <a
              href="#"
              key={index}
              className="text-sm text-[#333] underline hover:text-black transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const CommonVisitReasons = () => {
  return (
    <section className="bg-[#FFF4C3] py-16 px-6 lg:px-16">
      <h2 className="text-xl font-medium text-[#333333] mb-10">
        Common visit reasons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8">
        {visitReasonsData.map((reason, index) => (
          <VisitReasonDropdown key={index} reason={reason} />
        ))}
      </div>
    </section>
  );
};

export default CommonVisitReasons;
