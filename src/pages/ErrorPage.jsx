import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#FFF04B]">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page not found.
        </h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-[#FFF04B] text-black font-bold rounded-md hover:bg-[#FFCC00] transition"
        >
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
