import React from "react";
import StoriesWrapper from "../../components/StoriesWrapper";
import StoryBody from "../../components/StoryBody";
import Forms from "../forms";
import "./stories.css";

function Home() {
  return (
    <StoriesWrapper>
      <div className="stories-header"></div>
      <StoryBody />
      <Forms />
    </StoriesWrapper>
  );
}

export default Home;
