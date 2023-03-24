import React from "react";
import '../css/header-popup.css';
import SearchIcon from "@mui/icons-material/Search";
import ContactInPopup from "./contact-in-popup";


function HeaderPopup() {
  return (
    <div className="header-popup-wrap">
      <div className="header-popup-header">
        <p>Chat</p>
      </div>
      <div className="search-input-header">
        <SearchIcon style={{ color: "#b0b3b8" }} className="search-icon" />
        <input type="text" />
      </div>
      <div className="header-popup-content">
        <ContactInPopup />
      </div>
    </div>
  );
}

export default HeaderPopup;
