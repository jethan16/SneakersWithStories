import React from "react";
import "./NavModal.css";
import iconSearch from "../../images/icons/icon-search.png";

function Modal(props) {
  console.log('from modal',props.currentBarState);

  return (
    <div
      className={`search-window ${
        props.currentPopState === false ? "search-hide" : "search-show"
      }`}
      name='nav'
    >
      <div className="squares">
        <div className="squares-container">
          <div className="left-box"></div>
        </div>
        <div className="squares-container">
          <div className="search-container">
            <h1 className="title is-1 search-title">SEARCH</h1>
            <div className="search-bar-modal">
              <input
                className="search-field"
                type="search"
                placeholder="Take a look around."
              ></input>
              <img src={iconSearch} />
            </div>
          </div>
          <div className="modal-gallery">
            <div className="search-modal-image one"></div>
            <div className="search-modal-image two"></div>
            <div className="search-modal-image three"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
