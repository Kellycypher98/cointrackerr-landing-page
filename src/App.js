import React from "react";
import Benefits from "./components/Benefits";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import OurExperts from "./components/OurExperts";

import Testimonials from "./components/Testimonials";
import BottomCTA from "./components/BottomCTA";

function App() {
  return (
    <div>
      <Header />

      <Hero />

      <Benefits/>

      <OurExperts/>

      <Testimonials/>

      <BottomCTA/>

      <Footer/>
    </div>
  );
}

export default App;
