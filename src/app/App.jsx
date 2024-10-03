import React from "react";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AppPromo from "../components/AppPromo";


const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Specialties />
      <AppPromo />
      <Footer />
    </>
  );
};

export default App;
