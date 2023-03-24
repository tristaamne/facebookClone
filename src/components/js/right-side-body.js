import React from "react";
import BirthDay from "../../partOfWeb/js/birth-day";
import Contact from "../../partOfWeb/js/contact";
import FriendRequest from "../../partOfWeb/js/friend-request";
import "../css/right-side-body.css"

function RightSideBody() {
  return (
    <div className="right-side-body-box">
        <p className="sponsor">Được tài trợ</p>
        <div className="friend-request-title">
          <p>Lời mời kết bạn</p>
          <a href="?">Xem tất cả</a>
        </div>
        <div className="friend-request-content">
          <FriendRequest />
        </div>
        <div className="underLine"></div>
        <div className="birthday-content">
          <p className="header-content">Sinh nhật</p>
          <BirthDay />
        </div>
        <div className="underLine"></div>
        <p className="header-content">Người liên hệ</p>
        <Contact Name="Dang Tri Taam" Ava=""/>
        <Contact Name="Dang Tri Taam" Ava=""/>
        <Contact Name="Dang Tri Taam" Ava=""/>
        <Contact Name="Dang Tri Taam" Ava=""/>
        <Contact Name="Dang Tri Taam" Ava=""/>
        <Contact Name="Dang Tri Taam" Ava=""/>

    </div>
  );
}

export default RightSideBody;
