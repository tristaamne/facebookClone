import React from "react";
import "../css/left-side-body-tab.css";

function LeftSideBodyTab(type) {
  return (
    <div className="left-side-tabs">
      <span className={type.icon}></span>
      <p>{type.content}</p>
    </div>
  );
}

export default LeftSideBodyTab;
