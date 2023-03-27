import React, { useState } from "react";
import "../css/post-handle-popup.css";
import CloseIcon from "@mui/icons-material/Close";
import UserAvatarCircle from "../../partOfWeb/js/user-avatar-circle";

function PostHandlePopup({ popupOn, setPopupOn }) {
  const [submitbtn, setSubmitbtn] = useState(false);
  return (
    <div className="post-handle-popup-wrap">
      <div className="post-handle-header">
        <p>Tạo bài viết</p>
        <div
          className="close-icon-box"
          onClick={() => {
            setPopupOn(false);
          }}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="post-handle-body">
        <div className="post-handle-body-user-in4">
          <UserAvatarCircle />
          <p className="post-handle-body-user-name">Dang Tri Tam</p>
        </div>
      </div>
      <textarea
        onChange={(e) => {
          if (e.target.value == "") {
            setSubmitbtn(false);
          } else {
            setSubmitbtn(true);
          }
        }}
        type="text"
        className="post-textarea"
        placeholder="Tâm ơi bạn đang nghĩ gì?"
      ></textarea>
      <button className={submitbtn === false ? "disable" : "able"}>Đăng</button>
    </div>
  );
}

export default PostHandlePopup;
