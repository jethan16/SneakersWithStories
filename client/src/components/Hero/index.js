import React from "react";
import { Link, Route } from "react-router-dom";
import "./hero.css";
// import hornetsImage from "../../images/shoes/1_Hornets/Hornets_4.jpg";
// import BIAshoes from "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/BIAShoes-1.jpg"
// import snkrsLogo from "../../images/logos/SwS_Mark_KO.png"
import chevronRight from "../../images/icons/chevron-right.png"
import heroSplash from "../../images/splashes/mainSplash.png"

function Hero() {
  return (
    <section className="hero">
      <img className='hero-splash' src={heroSplash} alt="splash" />
      <div className='hero-text'>
        <h1>Some stories require laces, not words.</h1>
        <Link to="/vision">
        <h5>
        Let us tell you more about it {<img className='chevron-right'src={chevronRight} width='16' height='16'/>}
        </h5>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
