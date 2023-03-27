import React from "react";
import CenterBody from "../../components/js/center-body";
import ChatBubble from "../../components/js/chat-bubble";
import LeftSideBody from "../../components/js/left-side-body";
import RightSideBody from "../../components/js/right-side-body";
import "../css/body.css";

function Body() {
  return (
    <div className="body-box">
      <div className="body-boxes left">
        <div className="height-control">
          <LeftSideBody />
        </div>
      </div>
      <CenterBody />
      <div className="body-boxes right">
        <div className="height-control">
          <RightSideBody />
        </div>
      </div>
      {/* <ChatBubble/> */}
    </div>
  );
}

export default Body;
