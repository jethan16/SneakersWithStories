import React from "react";
import Hero from "../../components/Hero"
import Highlight from "../../components/Highlight"
import Footer from "../../components/Footer"
import "../Home/home.css"
import Gallery from "../../components/Gallery"

function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      {/* <Highlight /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
