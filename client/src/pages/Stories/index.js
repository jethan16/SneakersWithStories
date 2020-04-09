import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StoriesWrapper from "../../components/StoriesWrapper";
import StoryBody from "../../components/StoryBody";
import Footer from "../../components/Footer";
import Dean1 from "../../images/shoes/2_Panthers/gal-images/gal-image-1.png";
import Dean2 from "../../images/shoes/2_Panthers/gal-images/gal-image-2.png";
import Dean3 from "../../images/shoes/2_Panthers/gal-images/gal-image-3.png";
import Dean4 from "../../images/shoes/2_Panthers/gal-images/gal-image-4.png";
import Panthers_1 from "../../images/shoes/2_Panthers/Panthers_1.jpg";
import Panthers_2 from "../../images/shoes/2_Panthers/Panthers_2.jpg";
import Panthers_3 from "../../images/shoes/2_Panthers/Panthers_3.jpg";
import Panthers_4 from "../../images/shoes/2_Panthers/Panthers_4.jpg";
import Panthers_5 from "../../images/shoes/2_Panthers/Panthers_5.jpg";
import "./stories.css";

let storage = [
  {
    subject: `Dean Adcock`,
    shoeImages: [Panthers_1, Panthers_2, Panthers_3, Panthers_4, Panthers_5],
    galImages: [Dean1, Dean2, Dean3, Dean4],
    pullQuote: "Dean was always the life of the party.",
    features: [
      "Watermark signatures",
      `Dean's signature`,
      `Hand painted Panther's logo`,
    ],
    storySummary:
      "Dean was the coolest guy around. Everyone loved him and he was the nicest person you could ever meet.",
    shoeType: "Air Monarchs",
    theme: {
      bgColor: "#00a5ff",
    },
  },
  {
    subject: `Scott Brinkley`,
    shoeImages: [
      Panthers_1,
      "/images/shoes/2_Panthers/Panthers_2.jpg",
      "/images/shoes/2_Panthers/Panthers_3.jpg",
      "/images/shoes/2_Panthers/Panthers_4.jpg",
      "/images/shoes/2_Panthers/Panthers_5.jpg",
      "/images/shoes/2_Panthers/Panthers_6.jpg",
    ],
    galImages: [Dean1, Dean2, Dean3, Dean4],
    pullQuote: "Scott is a brilliant artist and cinema fanatic.",
    features: [
      "Buzz Lightyear themed",
      `Andy's name on the bottom`,
      `Custom laces`,
    ],
    storySummary: "Scott emodies eccentricity in the best way possible. ",
    shoeType: "Converse lo-tops",
    theme: {
      bgColor: "green",
    },
  },
  {
    subject: `Tinley So-and-So`,
    shoeImages: [
      Panthers_1,
      "/images/shoes/2_Panthers/Panthers_2.jpg",
      "/images/shoes/2_Panthers/Panthers_3.jpg",
      "/images/shoes/2_Panthers/Panthers_4.jpg",
      "/images/shoes/2_Panthers/Panthers_5.jpg",
      "/images/shoes/2_Panthers/Panthers_6.jpg",
    ],
    galImages: [Dean1, Dean2, Dean3, Dean4],
    pullQuote: "She deserved a great shoe.",
    features: ["Water theme", `cool artz`, `pretty laces`],
    storySummary: "She seems neat",
    shoeType: "Nike Air",
    theme: {
      bgColor: "purple",
    },
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Stories() {
  const [storyIndex, setStoryIndex] = useState(0);
  const currentStory = storage[storyIndex];

  const getNextStory = () => {
    // console.log(storage.length - 1);
    if (storyIndex === storage.length - 1) {
      setStoryIndex(0);
      return console.log("start over!");
    } else {
      setStoryIndex(storyIndex + 1);
    }
  };

  const getLastStory = () => {
    if (storyIndex < 1) {
      setStoryIndex(storage.length - 1);
      return console.log("the end!");
    }
    setStoryIndex(storyIndex - 1);
  };

  // console.log(currentStory);

  return (
    <StoriesWrapper>
        <div className="story-banner">{currentStory.subject}</div>
      <section className="story-splash">
        <div className="carousel-container">
          <Carousel
            responsive={responsive}
            infinite={true}
            className="stories-carousel"
          >
            {currentStory.shoeImages.map((image) => (
              <div>
                <img className="story-img" src={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="shoe-specs">
          <ul className="features">
            <h1>Highlights:</h1>
            {currentStory.features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
          <ul className="features">
            <h1>Shoe:</h1>
            <li>{currentStory.shoeType}</li>
          </ul>
        </div>
        </section>

        <div className="story-overview">
          <i class="fas fa-quote-left"></i>
          <h1 className="pull-quote">{currentStory.pullQuote}</h1>
          <i class="fas fa-quote-right"></i>
        </div>
        <div className="gallery-container">
          {currentStory.galImages.map((image) => (
            <div className="gal-image">
              <img src={image}></img>
            </div>
          ))}
        </div>
        <div className="story-summary">
          <p>{currentStory.storySummary}</p>
        </div>
        <div className='button-bar'>
          <h1
            className="button is-radiusless story-button"
            onClick={getLastStory}
          >
            Previous
          </h1>
          <h1
            className="button is-radiusless story-button next-button"
            onClick={getNextStory}
          >
            Next
          </h1>
        </div>
        <Footer />
    </StoriesWrapper>
  );
}

export default Stories;
