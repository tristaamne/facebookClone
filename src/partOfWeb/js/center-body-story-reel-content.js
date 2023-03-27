import React, { useState } from "react";
import "../css/center-body-story-reel-content.css";
import Story from "./story";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Reel from "./reel";
import UserStoryInteract from "./user-story-interact";

function CenterBodyStoryReelContent({ storyreelSelector }) {
  const [story, setStory] = useState({});
  const [storyList, setStoryList] = useState([]);
  return (
    <div className="story-reel-content-box">
      {/* <KeyboardArrowLeftRoundedIcon /> */}
      <div className="story-reel-btn-holder">
        {storyreelSelector === "0" ? (
          <div className="story-content-wrap">
            <UserStoryInteract />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
          </div>
        ) : (
          <div className="reel-content-wrap">
            <Reel />
            <Reel />
            <Reel />
            <Reel />
            <Reel />
          </div>
        )}
      </div>
    </div>
  );
}

export default CenterBodyStoryReelContent;
