import React from "react";
import QRCodeImg from "../assets/AppPromo/QRCodeImg.png";
import AppStoreImg from "../assets/Footer/Apple.png";
import GooglePlayImg from "../assets/Footer/Android.png";
import PhoneImg from "../assets/AppPromo/PhoneImg.png";
import Circle from "../assets/AppPromo/Circle.png";

const AppPromo = () => {
  return (
    <section className="bg-[#FFC794] relative flex flex-col lg:flex-row justify-between items-center  px-10 lg:px-16 z-0">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-xl lg:text-2xl font-extralight text-[#333333] mb-4">
          Thousands of providers. <br /> One app.
        </h2>
        <p className="text-base text-[#333333] font-extralight mb-4">
          The Zocdoc app is the quickest, easiest way to book <br />
          and keep track of your appointments.
        </p>
        <p className="text-base text-[#333333] font-extralight mb-4">
          Scan the QR code to get the app now
        </p>
        <img src={QRCodeImg} alt="QR Code" className="w-28 h-28 mb-4" />
        <div className="flex space-x-4">
          <img src={AppStoreImg} alt="App Store" className="h-8" />
          <img src={GooglePlayImg} alt="Google Play" className="h-8" />
        </div>
      </div>

      {/* Right Section with Larger Hand and Phone Image */}
      <div className="relative w-1/2 h-3/2 ">
        <svg
          width="240"
          height="155"
          viewBox="0 0 240 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 -left-40 top-20"
        >
          <path
            d="M12.627 54.1608C33.3571 37.1751 77.3532 26.9755 100.166 40.0963C129.614 57.0353 114.366 97.9254 84.324 93.2652C67.9147 90.7192 65.2227 75.0788 77.2864 64.1918C99.5574 44.0909 183.492 43.9845 216.737 120.875"
            stroke="#252D37"
            stroke-width="2.91262"
            stroke-linecap="round"
          />
          <path
            d="M220.159 101.738C218.52 108.136 219.348 124.573 219.348 124.573C219.348 124.573 208.903 115.542 195.859 113.595"
            stroke="#252D37"
            stroke-width="2.91262"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <img
          src={Circle}
          alt=""
          className="absolute -z-10 -right-16 bottom-0 w-[70%] h-auto"
        />

        <img
          src={PhoneImg}
          alt="Phone with Zocdoc app"
          className=" -bottom-72 w-[28rem] lg:w-[45rem] z-10"
        />
      </div>
    </section>
  );
};

export default AppPromo;
