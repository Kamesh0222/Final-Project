import React from "react";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AppPromo from "../components/AppPromo";
import PracticePromo from "../components/PracticePromo";
import TrustedByHealthSystems from "../components/TrustedByHealthSystems";
import CityDropdown from "../components/CityDropdown"
import JobPromo from "../components/JobPromo";
import VisitReasonDropdown from "../components/VisitReasonDropdown"
import CreateAccount from "../components/CreateAccount";


const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Specialties />
      <AppPromo />
      <PracticePromo />
      <TrustedByHealthSystems />
      <CityDropdown />
      <JobPromo />
      <VisitReasonDropdown />
      <Footer />
      {/* <CreateAccount /> */}
    </>
  );
};

export default App;
