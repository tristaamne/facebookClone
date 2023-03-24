import React from "react";
import "../css/friend-request.css";
import UserAvatarCircle from "./user-avatar-circle";
function FriendRequest() {
  return (
    <div className="friend-request-box">
      <UserAvatarCircle />
      <div className="friend-request-content">
        <div className="friend-request-name-date">
          <b>Đây là Trí Tâm</b>
          <small>2 ngày</small>
        </div>
        <div className="friend-request-common-friend">
          <UserAvatarCircle />
          <small>x bạn chung</small>
        </div>
        <div className="friend-request-btn">
          <button className="accept-btn">Xác nhận</button>
          <button className="delete-btn">Xoá</button>
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
