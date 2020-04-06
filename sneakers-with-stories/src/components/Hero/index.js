import React from "react";
import { Link, Route } from "react-router-dom";
import "./hero.css";
// import hornetsImage from "../../images/shoes/1_Hornets/Hornets_4.jpg";
import BIAshoes from "../../images/shoes/4_Armies/BIAShoes-12.jpg"
// import snkrsLogo from "../../images/logos/SwS_Mark_KO.png"
import chevronRight from "../../images/icons/chevron-right.png"

function Hero() {
  return (
    <section className="hero">
      <img className='hero-splash' src={BIAshoes} alt="armies shoes" />
      <div className='hero-text'>
        <h1>Some stories require laces, not words.</h1>
        <Link to="/vision">
        <h5>
        Let me tell you more about it {<img className='chevron-right'src={chevronRight} width='16' height='16'/>}
        </h5>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
