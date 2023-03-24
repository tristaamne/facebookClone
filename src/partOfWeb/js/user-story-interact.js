import React from "react";
import "../css/user-story-interact.css";

function UserStoryInteract() {
  return (
    <div className="user-interact-box">
      <img
        className="user-interact-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznIaYkSKhyLqz3D7pUked0X9Dc47qbF3k6EzydCdK&s"
      ></img>
      <div className="user-interact-text">
        <div className="user-interact-text-icon-box">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            width="1em"
            height="1em"
            className="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv x1qx5ct2 xw4jnvo"
          >
            <g fillRule="evenodd" transform="translate(-446 -350)">
              <g fillRule="nonzero">
                <path
                  d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                  transform="translate(354.5 159.5)"
                ></path>
                <path
                  d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                  transform="translate(354.5 159.5)"
                ></path>
              </g>
            </g>
          </svg>
        </div>{" "}
        <p className="text">Tạo tin</p>
      </div>
    </div>
  );
}

export default UserStoryInteract;
