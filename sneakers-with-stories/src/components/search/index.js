import React, { useState, useEffect } from "react";
import iconSearch from "../../images/icons/icon-search.png";
import iconX from "../../images/icons/icon-X.png";
import "../search/Search.css";

function Search(props) {

  const [searchContent, setSearchContent] = useState({
    search: iconSearch,
    icon: "search",
  });

  useEffect(() => {
    if (props.currentPopState === true) {
      setSearchContent({ icon: iconX, search: "" });
    } else {
      setSearchContent({ icon: iconSearch, search: "search" });
    }
  }, [props.currentPopState]);

  return (
    <div
      className={`search-bar ${
        props.currentPopState === false
          ? "search-bar-expand"
          : "search-bar-shrink"
      }`}
      onClick={props.changePopState}
    >
      <h5>{searchContent.search}</h5>
      <img
        src={searchContent.icon}
        width="16"
        height="16"
        alt={searchContent.icon}
      />
    </div>
  );
}

export default Search;
