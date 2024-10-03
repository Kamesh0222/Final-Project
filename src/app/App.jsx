import React from "react";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AppPromo from "../components/AppPromo";
import PracticePromo from "../components/PracticePromo";


const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Specialties />
      <AppPromo />
      <PracticePromo />
      <Footer />
    </>
  );
};

export default App;
