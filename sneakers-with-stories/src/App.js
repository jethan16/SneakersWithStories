import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/navbar";
// import Forms from "./pages/forms";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Shop from "./pages/Shop";
import Vision from "./pages/Vision";
import Team from "./pages/Team";


import snkrsBanner from "./images/logos/SwS_Logo_Full.png";

function App() {
  let [barState, setBarState] = useState(false);
  let [popState, setPopState] = useState(false);

  const changePopState = () => {
    setPopState(!popState);
  };

  function menuOpen() {
    setBarState(!barState);
    // const root = document.getElementById('root')
    const barOne = document.getElementById("1");
    const barTwo = document.getElementById("2");
    const barThree = document.getElementById("3");

    if (barState === false) {
      barOne.classList.add("bar-one");
      barTwo.classList.add("bar-two");
      barThree.classList.add("bar-three");
      // root.style.overflow = 'hidden';
    } else {
      barOne.classList.remove("bar-one");
      barTwo.classList.remove("bar-two");
      barThree.classList.remove("bar-three");
    }
  }

  function status() {
    if (popState === false || barState === false) {
      return "bg-show";
    } else if (popState === true || barState === true) {
      return "bg-dim";
    }
  }

  return (
    <Router>
      <div className="banner">
        <img src={snkrsBanner} />
        <div className="burger" onClick={menuOpen}>
          <div className="burger-bar" id="1"></div>
          <div className="burger-bar" id="2"></div>
          <div className="burger-bar" id="3"></div>
        </div>
      </div>
      <Navbar
        currentBarState={barState}
        currentPopState={popState}
        changePopState={changePopState}
      />
      <Wrapper className={popState === false || barState === false ? 'bg-show' : 'bg-dim'}>
        <Route exact path="/" component={Home} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/vision" component={Vision} />
        <Route exact path="/team" component={Team} />
      </Wrapper>
    </Router>
  );
}

export default App;
