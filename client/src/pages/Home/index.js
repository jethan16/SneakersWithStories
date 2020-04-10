import React from "react";
import Hero from "../../components/Hero"
import Story from "../../components/YourStory"
import Footer from "../../components/Footer"
import "../Home/home.css"
import Gallery from "../../components/Gallery"

function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <Story />
      <Footer />
    </div>
  );
}

export default Home;
