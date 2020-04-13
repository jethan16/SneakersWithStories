import React from "react";
import "./storyBody.css";
// import Panthers1 from "../../images/shoes/2_Panthers/Panthers_1.jpg";
// import blockQuotes from "../../images/icons/block-quotes.png";

function StoryBody(props) {
  console.log('from Story Body', props)
  return (
    <section className="story-splash">
      {/* <img src={Panthers1} alt="Dean's Shoes" /> */}
      <div className='story-splash-content'>
        <div className="pull-quote">
          <img src={''} />
          <h1>{props.currentStorySummary}</h1>
        </div>
        <div className="shoe-highlights">
          <h5>
            Highlights:
          </h5>
        </div>
      </div>
    </section>
  );
}

export default StoryBody;
