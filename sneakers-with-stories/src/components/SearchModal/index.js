import React from "react";
import "./NavModal.css";

function Modal(props) {
  console.log(props.currentPopState);

  return (
    <div
      className={`search-window ${
        props.currentPopState === false ? "search-hide" : "search-show"
      }`}
    >
      <div className="squares">
        <div className="squares-container">
          <div className="left-box"></div>
          {/* <div className="left-box two"></div>
          <div className="left-box three"></div>
          <div className="left-box four"></div> */}
        </div>
        <div className="squares-container">
          <div className="right-box five">
            <h1 className="title is-1 search-title">SEARCH</h1>
            <input className='search-field' type='search' placeholder='Take a look around.'></input>
          </div>
          <div className="right-box six">
            <div className='example one'></div>
            <div className='example two'></div>
            <div className='example three'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
