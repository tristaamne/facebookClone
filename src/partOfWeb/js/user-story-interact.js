import React from "react";
import "../css/user-story-interact.css";

function UserStoryInteract() {
  return (
    <div className="user-interact-box">
      <img
        className="user-interact-image"
        src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/321822155_899708297707235_5749840580572609327_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=G9DGv9TmaGkAX9LWz3q&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAwG6fhPaosRY8sshHkz3FC8VNCBD-RN__sUazLwpYycQ&oe=64184932"
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
