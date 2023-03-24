import React from "react";
import "../css/header.css";
import SearchIcon from "@mui/icons-material/Search";
import Iconbox from "../../components/js/icon-box.js";
import RightSideHeader from "../../components/js/right-side-header";

function Header() {
  return (
    <div className="header-box">
      <div className="header-sticker">
        <div className="left-side-header">
          <img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt=""
          />
          <div className="search-input-header">
            <SearchIcon style={{ color: "#b0b3b8" }} className="search-icon" />
            <input type="text" />
          </div>
        </div>

        <div className="center-header">
          <Iconbox />
        </div>

        <div className="right-side-header">
          <RightSideHeader />
        </div>
      </div>
      {/* <div className="header-popup">

      </div> */}
    </div>
  );
}

export default Header;
