import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../search";
import Modal from "../SearchModal";

function Navbar() {
  const [popState, setPopState] = useState(false);

  const changePopState = () => {
    // console.log('before', popState)
    setPopState(!popState);
    // console.log('after',popState)
  };

  useEffect(() => {
    console.log(popState);
  }, [popState]);

  return (
    <div>
      <div className="columns nav-bar">
        <Link className="logo" to="/">
          <h1>SWS</h1>
        </Link>
        <div className="column justify-left has-margin-left is-paddingless">
          <Link className="nav-title" to="/stories">
            <h1 className="title is-6">Hear The Stories</h1>
          </Link>
          <Link className="nav-title" to="/shoes">
            <h1 className="title is-6">See The Shoes</h1>
          </Link>
          <Link className="nav-title" to="/vision">
            <h1 className="title is-6">Catch The Vision</h1>
          </Link>
          <Link className="nav-title" to="/shop">
            <h1 className="title is-6">Get The Gear</h1>
          </Link>
          <Link className="nav-title" to="/team">
            <h1 className="title is-6">Meet The Team</h1>
          </Link>
        </div>
        <Search changePopState={changePopState} currentPopState={popState} />
      </div>
      <Modal currentPopState={popState} />
    </div>
  );
}

export default Navbar;
