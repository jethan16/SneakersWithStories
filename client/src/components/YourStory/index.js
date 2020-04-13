import React from "react";
import {Link} from 'react-router-dom'
import "./yourStory.css";
// import Panthers1 from "../../images/shoes/2_Panthers/Panthers_1.jpg";
// import Panthers2 from "../../images/shoes/2_Panthers/Panthers_4.jpg";

function YourStory() {
  return (
    <Link to='/contact'>
      <div className="middle">
        <div className='middle-left'></div>
        <div className='middle-right'></div>
        <div className='middle-image'></div>
      </div>
    </Link>
  );
}

export default YourStory;
