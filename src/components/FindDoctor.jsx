import React from "react";
import BrowseProvidersImg from "../assets/Doctor/BrowseProviders.png"; 
import ReadReviewsImg from "../assets/Doctor/ReadReviews.png";
import BookAppointmentImg from "../assets/Doctor/BookAppointment.png";

const features = [
  {
    title: "Browse providers who take your insurance",
    description: "Browse providers who take your insurance",
    buttonText: "See specialties",
    imgSrc: BrowseProvidersImg,
    alt: "Browse providers",
  },
  {
    title: "Read reviews from users",
    description: "Read reviews from users",
    buttonText: "See providers",
    imgSrc: ReadReviewsImg,
    alt: "Read reviews",
  },
  {
    title: "Book an appointment today, online",
    description: "Book an appointment today, online",
    buttonText: "See availability",
    imgSrc: BookAppointmentImg,
    alt: "Book appointment",
  },
];

const FindDoctor = () => {
  return (
    <section className="bg-[#FFF0BB] py-16">
      <div className="mx-auto">
        <h2 className="text-center text-2xl mb-36">
          Let’s get you a doc who gets you
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FDFAEE] rounded-lg p-8 flex flex-col items-center text-center w-full sm:w-80 md:w-96 lg:w-96 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={feature.imgSrc}
                alt={feature.alt}
                className="w-72 h-72 -mt-28 mb-6"
              />
              <h3 className="text-lg mb-4">{feature.title}</h3>
              <div className="flex-grow"></div>
              <button className="px-16 py-3 border border-black rounded-md text-gray-700 hover:bg-gray-100">
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindDoctor;
