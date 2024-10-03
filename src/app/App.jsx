import React from "react";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Nav from "../components/Nav"
import Footer from "../components/Footer"


const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Specialties />
      <Footer />
    </>
  );
};

export default App;
