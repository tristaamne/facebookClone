import React from "react";
import "../css/story.css";

function Story() {
  return (
    <div className="story-content-box">
      <img
        className="story-content"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznIaYkSKhyLqz3D7pUked0X9Dc47qbF3k6EzydCdK&s"
      ></img>
      <div className="user-avatar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznIaYkSKhyLqz3D7pUked0X9Dc47qbF3k6EzydCdK&s"></img>
      </div>
      <div className="user-name">
        <p>Khong phai Dang Tri Tam</p>
      </div>
    </div>
  );
}

export default Story;
