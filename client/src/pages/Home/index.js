import React from "react";
import Hero from "../../components/Hero"
import Process from "../../components/Process"
import Footer from "../../components/Footer"
import "../Home/home.css"
import Gallery from "../../components/Gallery"

function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <Process />
      <Footer />
    </div>
  );
}

export default Home;
