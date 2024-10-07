import React, { useState } from "react";
import { doctorCities } from "../Data/dbJson";


const CityDropdownAccordion = ({ title, items, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-[#585757] mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 focus:outline-none"
      >
        <span className="text-lg font-extralight">{title}</span>
        {isOpen ? (
          <svg
            width="19"
            height="25"
            viewBox="0 0 19 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4755 16.798L17.8831 15.3358L9.75763 7.47248L1.88558 15.5966L3.33836 17.004L9.80276 10.3336L16.4755 16.798Z"
              fill="#333333"
            />
          </svg>
        ) : (
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
        )}
      </button>

      {isOpen && (
        <div className="transition-all duration-500 ease-in-out">
          <ul>
            {items.map((doctor, index) => (
              <li key={index} className="underline pl-2 pb-2">
                {doctor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CityDropdownColumn = ({
  cities,
  data,
  openIndex,
  setOpenIndex,
  columnOffset,
}) => {
  return (
    <div className="flex flex-col w-full lg:w-1/4 p-4">
      {cities.map((city, index) => (
        <CityDropdownAccordion
          key={city}
          title={city}
          items={data[city]}
          isOpen={openIndex === index + columnOffset}
          toggleAccordion={() =>
            setOpenIndex(
              openIndex === index + columnOffset ? null : index + columnOffset
            )
          }
        />
      ))}
    </div>
  );
};


const CityDropdown = () => {
  const [openIndex, setOpenIndex] = useState(null); 
  const cityNames = Object.keys(doctorCities);
  const firstColCities = cityNames.slice(0, 5);
  const secondColCities = cityNames.slice(5, 10);
  const thirdColCities = cityNames.slice(10, 15);
  const fourthColCities = cityNames.slice(15, 20);

  return (
    <div className="bg-[#FFF4C3]">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-2xl">Find doctors and dentists by city</h1>
        <div className="mt-10 flex flex-col lg:flex-row justify-between">
          <CityDropdownColumn
            cities={firstColCities}
            data={doctorCities}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnOffset={0}
          />
          <CityDropdownColumn
            cities={secondColCities}
            data={doctorCities}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnOffset={5}
          />
          <CityDropdownColumn
            cities={thirdColCities}
            data={doctorCities}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnOffset={10}
          />
          <CityDropdownColumn
            cities={fourthColCities}
            data={doctorCities}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnOffset={15}
          />
        </div>
      </div>
    </div>
  );
};

export default CityDropdown;
