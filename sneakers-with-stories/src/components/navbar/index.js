import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../search";
import Modal from "../SearchModal";

import logoKO from "../../images/logos/SwS_Mark.png"

function Navbar(props) {
  console.log(props.changePopState, props.currentPopState)
  useEffect(() => {
    console.log(props.popState);
  }, [props.popState]);

  return (
    <div>
      <div className={`columns nav-bar ${props.currentBarState === false ? 'nav-mobile-hide' : ''}`}>
        <Link className="logo" to="/">
          <img src={logoKO} />
        </Link>
        <div className="column justify-left has-margin-left is-paddingless">
          <Link className="" to="/stories">
            <h1 className="nav-title">See The Stories</h1>
          </Link>
          <Link className="" to="/vision">
            <h1 className="nav-title">Hear The Vision</h1>
          </Link>
          <Link className="" to="/shop">
            <h1 className="nav-title">Get The Gear</h1>
          </Link>
          <Link className="" to="/team">
            <h1 className="nav-title">Meet The Team</h1>
          </Link>
        </div>
        <Search changePopState={props.changePopState} currentPopState={props.currentPopState} />
      </div>
      <Modal 
      currentPopState={props.currentPopState}
       />
    </div>
  );
}

export default Navbar;
