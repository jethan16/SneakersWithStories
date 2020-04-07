import React, { useState } from "react";
import "./highlight.css";
import Panthers1 from "../../images/shoes/2_Panthers/Panthers_1.jpg";
import Panthers2 from "../../images/shoes/2_Panthers/Panthers_4.jpg";

function Highlight() {
  const [highlightName, setHighlightName] = useState({
    highlightName: "Dean",
  });

  return (
    <div className="jumbotron middle">
        <h1 className="middle-title">Check out Dean's story</h1>
    </div>
  );
}

export default Highlight;
