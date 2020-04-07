import React from "react";
import "./gallery.css";
import { useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fortnite from "../../images/shoes/3_Fortnite/Fortnite_4.jpg";
import BIA from "../../images/shoes/4_Armies/BIAShoes-12.jpg";
import PinkRibbon from "../../images/shoes/cancer.png";
import Rangers from "../../images/shoes/5_Rangers/Rangers_2.jpg";

function Gallery() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel 
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3500}
    className='carousel'>
      <div>
        <img className='gallery-img' src={Fortnite} />
      </div>
      <div>
        <img className='gallery-img' src={BIA} />
      </div>
      <div>
        <img className='gallery-img' src={PinkRibbon} />
      </div>
      <div>
        <img className='gallery-img' src={Rangers} />
      </div>
    </Carousel>
  );
}

export default Gallery;
