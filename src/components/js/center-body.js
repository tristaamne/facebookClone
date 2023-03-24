import React, { useState } from "react";
import "../css/center-body.css";
import CenterBodyStoryReelTitle from "../../partOfWeb/js/center-body-story-reel-title.js";
import CenterBodyStoryReelContent from "../../partOfWeb/js/center-body-story-reel-content";
import CenterBodyStatusPostHandle from "../../partOfWeb/js/center-body-status-post-handle";

function CenterBody() {
  const [storyreelSelector, storyreelSelectorSet] = useState("0");

  return (
    <div className="center-body-box">
      <div className="center-body-reel-story-wrap">
        <CenterBodyStoryReelTitle
          storyreelSelector={storyreelSelector}
          StoryreelSelectorSet={storyreelSelectorSet}
        />
        <CenterBodyStoryReelContent storyreelSelector={storyreelSelector} />
      </div>
      <div className="center-body-status-post-handle-wrap">
        <CenterBodyStatusPostHandle />
      </div>
    </div>
  );
}

export default CenterBody;
