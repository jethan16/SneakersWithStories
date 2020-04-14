import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StoriesWrapper from "../../components/StoriesWrapper";
import StoryBody from "../../components/StoryBody";
import Footer from "../../components/Footer";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./stories.css";
import API from "../../lib/API";

// let storage = [
//   {
//     subject: `Jonathan Adcock`,
//     shoeImages: [
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/dean-1.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/dean-2.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/dean-3.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/dean-4.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/dean-5.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/dean-6.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/dean-7.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/dean-8.jpg",
//     ],
//     galImages: [
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-1.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-2.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-3.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-4.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-5.jpg",
//     ],
//     pullQuote:
//       "that would be the last football game that Dean and I would attend together",
//     features: [
//       "Dean's signature across heel tab",
//       `Design  mimics Panther's helmet`,
//       `Historical Panther's logos/numbers painted behind 'Keep Pounding'`,
//     ],
//     storySummary: `Dean was the life of the party. In fact, we as a family agreed that when Dean was born, he took all the swag out of the gene pool. His swag was so strong that the Carolina Panthers sent the two of us to Super Bowl 52. Little did I realize, that would be the last football game that Dean and I would attend together.

//       Dean was born with Downs Syndrome and was one of best guys I’ve ever known. When the Panthers became an NFL team, he and I immediately latched on, creating one of the strongest bonds we would share throughout his life. In addition to our extreme fandom, Dean was heavily involved in helping build the Special Olympics flag football league sponsored by the Panthers. For his contributions with that and for being a super fan, the Panthers sent Dean to Super Bowl 52 (and I got to ride his coattails). It was a trip of a lifetime. We cheered, danced, and mercilessly heckled fans from rival teams.

//       In preparation for the 2018 season, Dean began hinting (or outright saying) that he wanted me to take him to a game. Shortly after the daily calls and voicemails on that subject began, Dean got sick, ended up in the ICU and would go on to pass in late August. In his honor, we still attended a game, got rowdier than ever, and watched the Panthers obliterate the Ravens. It had Dean’s hand all over it.

//       These shoes will always help me remember my brother in one of the only ways he’d want to be remembered - with his own shoe containing the story of the Carolina Panthers.`,
//     shoeType: "Air Monarchs",
//     theme: {
//       bgColor: "#00a5ff",
//     },
//   },
//   {
//     subject: `Scott Brinkley`,
//     shoeImages: [
//       "/images/shoes/2_Panthers/Panthers_2.jpg",
//       "/images/shoes/2_Panthers/Panthers_3.jpg",
//       "/images/shoes/2_Panthers/Panthers_4.jpg",
//       "/images/shoes/2_Panthers/Panthers_5.jpg",
//       "/images/shoes/2_Panthers/Panthers_6.jpg",
//     ],
//     pullQuote: "Scott is a brilliant artist and cinema fanatic.",
//     features: [
//       "Buzz Lightyear themed",
//       `Andy's name on the bottom`,
//       `Custom laces`,
//     ],
//     galImages: [
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-1.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-2.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-3.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-4.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-5.jpg",
//     ],
//     storySummary: "Scott emodies eccentricity in the best way possible. ",
//     shoeType: "Converse lo-tops",
//     theme: {
//       bgColor: "green",
//     },
//   },
//   {
//     subject: `Tinley So-and-So`,
//     shoeImages: [
//       // Panthers_1,
//       "/images/shoes/2_Panthers/Panthers_2.jpg",
//       "/images/shoes/2_Panthers/Panthers_3.jpg",
//       "/images/shoes/2_Panthers/Panthers_4.jpg",
//       "/images/shoes/2_Panthers/Panthers_5.jpg",
//       "/images/shoes/2_Panthers/Panthers_6.jpg",
//     ],
//     galImages: [
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-1.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-2.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-3.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-4.jpg",
//       "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/panthers-5.jpg",
//     ],
//     pullQuote: "She deserved a great shoe.",
//     features: ["Water theme", `cool artz`, `pretty laces`],
//     storySummary: "She seems neat",
//     shoeType: "Nike Air",
//     theme: {
//       bgColor: "purple",
//     },
//   },
// ];

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
  const [stories, setStories] = useState([]);
  const currentStory = stories[storyIndex];

  useEffect(() => {
    API.Stories.getAll()
      .then((res) => {
        console.log(res.data);
        setStories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Story navigation logic

  const getNextStory = () => {
    console.log("clicked right");

    if (storyIndex === stories.length - 1) {
      setStoryIndex(0);
      return console.log("start over!");
    } else {
      setStoryIndex(storyIndex + 1);
    }
  };

  const getLastStory = () => {
    console.log("clicked left");

    if (storyIndex < 1) {
      setStoryIndex(stories.length - 1);
      return console.log("the end!");
    }
    setStoryIndex(storyIndex - 1);
  };

  //

  // Modal logic
  // let modalImage;
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState();
  function openModal(image) {
    console.log(image);

    setIsOpen(true);
    setModalImage(image);
    // modalImage = image;
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  //
  return (
        <StoriesWrapper>
          <div className="title-bar">
            <div onClick={getLastStory}>
              <i className="fas fa-chevron-left title-button"></i>
            </div>
            <h1 className="story-banner">{currentStory.name}</h1>
            <div onClick={getNextStory}>
              <i className="fas fa-chevron-right title-button"></i>
            </div>
          </div>
          <div className="story-section">
            <Carousel
              className="carousel-container"
              responsive={responsive}
              infinite={true}
            >
              {currentStory.galImages.map((image) => (
                <img className="story-img" src={image} />
              ))}
            </Carousel>
            <div className="pull-quote story-quote">
              <i className="fas fa-quote-left"></i>
              <p>{currentStory.pullQuote}</p>
              <i className="fas fa-quote-right"></i>
            </div>
            <p className="story-summary">{currentStory.storySummary}</p>
          </div>
          <div className="stories-lower">
            <div className="shoe-specs">
              <ul className="features">
                <h1>Highlights:</h1>
                {currentStory.highlights.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
              <ul className="specs-title">
                <h1>The Shoes</h1>
                <li>silhouette: {currentStory.silhouette}</li>
              </ul>
            </div>
            <div className="gallery-container">
              {currentStory.shoeImages.map((image) => (
                <img
                  className="gal-image"
                  src={image}
                  onClick={() => openModal(image)}
                ></img>
              ))}
            </div>
          </div>
          <div>
            <Modal
              className="modal-image"
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              // style={customStyles}
              contentLabel="Example Modal"
            >
              <button className="modal-icon" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              {/* {console.log(modalImage)} */}
              <img src={modalImage} alt="shoe close up"></img>
            </Modal>
          </div>
          <Footer />
        </StoriesWrapper>     
  );
}

export default Stories;
