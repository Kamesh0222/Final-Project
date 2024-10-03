import React from "react";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AppPromo from "../components/AppPromo";
import TrustedByHealthSystems from "../components/TrustedByHealthSystems";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Specialties />
      <AppPromo />
      <TrustedByHealthSystems />
      <Footer />
    </>
  );
};

export default App;
