import React from "react";
import Android from "../assets/Footer/Android.png";
import Apple from "../assets/Footer/Apple.png";
import TwitterIcon from "../assets/Footer/Twitter.png"; 
import InstagramIcon from "../assets/Footer/Instagram.png"; 
import FacebookIcon from "../assets/Footer/Facebook.png"; 
import LinkedInIcon from "../assets/Footer/LinkedIn.png";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-gray-300 pt-4">
      <div className="">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Zocdoc Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Zocdoc</h3>
            <ul className="space-y-2 text-sm text-[#9d9898]">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Discover Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Discover</h3>
            <ul className="space-y-2 text-sm text-[#9d9898]">
              <li>
                <a href="#" className="hover:underline">
                  The Paper Gown
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Stories for and about patients
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Practice Resources for providers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data and privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Verified reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Insurance Carriers Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Insurance Carriers
            </h3>
            <ul className="space-y-2 text-sm text-[#9d9898]">
              <li>
                <a href="#" className="hover:underline">
                  Aetna
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Aetna Dental
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ambetter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Anthem Blue Cross Blue Shield
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blue Cross Blue Shield
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blue Cross Blue Shield Dental
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cigna
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cigna Dental
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Delta Dental
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Florida Blue Cross Blue Shield
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Humana
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Humana Dental
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kaiser Permanente
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Metlife
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Multiplan PHCS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  UnitedHealthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  UnitedHealthcare Dental
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  UnitedHealthcare Oxford
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  1199SEIU
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  View all
                </a>
              </li>
            </ul>
          </div>

          {/* Top Specialties Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Top Specialties</h3>
            <ul className="space-y-2 text-sm text-[#9d9898]">
              <li>
                <a href="#" className="hover:underline">
                  Primary Care Doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Urgent Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dermatologist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  OB-GYN
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dentist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Psychiatrist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ear, Nose & Throat Doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Podiatrist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Urologist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gastroenterologist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cardiologist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Neurologist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orthopedic Surgeon
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ophthalmologist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pediatrician
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Optometrist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Eye Doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Therapist Counselor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Physical Therapist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Psychologist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  View all
                </a>
              </li>
            </ul>
          </div>

          {/* Are you a top doctor or health service? */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Are you a top doctor or health service?
            </h3>
            <ul className="space-y-2 text-sm text-[#9d9898]">
              <li>
                <a href="#">List your practice on Zocdoc</a>
              </li>
              <li>
                <a href="#">Become an EHR partner</a>
              </li>
              <li>
                <a href="#">Access Zocdoc for Developers</a>
              </li>
              <li>
                <a href="#">Learn about Zocdoc Enterprise Solutions</a>
              </li>
            </ul>

            {/* Marketing for Your Practice Column */}
            <h3 className="text-white font-semibold mb-4 mt-6">
              Marketing for your practice
            </h3>
            <ul className="space-y-2 text-sm text-[#9d9898]">
              <li>
                <a href="#" className="hover:underline">
                  Dental Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  OB-GYN Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dermatology Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Primary Care Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Psychiatry Marketing
                </a>
              </li>
            </ul>

            {/* App Download Section */}
            <h3 className="text-white font-semibold mb-4 mt-6">
              Get the Zocdoc app
            </h3>
            <div className="flex flex-col space-y-4">
              <img
                src={Apple}
                alt="Download on the App Store"
                className="h-12 w-2/3"
              />
              <img
                src={Android}
                alt="Get it on Google Play"
                className="h-12 w-2/3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-sm ml-6 space-y-2 text-[#9d9898]">
        The content provided here and elsewhere on the Zocdoc site or mobile app
        is provided for general informational purposes only. It is not intended
        as, and Zocdoc does not provide, medical advice, diagnosis, or
        treatment. Always contact your healthcare provider directly with any
        questions you may have regarding your health or specific medical advice.
      </div>

      <div className="bg-black mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 w-auto">
          {/* Left Side: Copyright and Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center text-sm text-gray-400">
            <p>© 2024 Zocdoc, Inc.</p>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Consumer Health
            </a>
            <a href="#" className="hover:underline">
              Site map
            </a>
            <div className="flex items-center space-x-1">
              <span>✔</span>
              <span>✖</span>
              <a href="#" className="hover:underline">
                Your privacy choices
              </a>
            </div>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#">
              <img src={TwitterIcon} alt="Twitter" className="h-5" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="Instagram" className="h-5" />
            </a>
            <a href="#">
              <img src={FacebookIcon} alt="Facebook" className="h-5" />
            </a>
            <a href="#">
              <img src={LinkedInIcon} alt="LinkedIn" className="h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
