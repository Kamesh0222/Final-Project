import React from "react";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Doctor from "../components/FindDoctor";


const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Specialties />
      <Doctor />
      <Footer />
    </>
  );
};

export default App;
