import React from "react";
import UserAvatarCircle from "./user-avatar-circle";
import "../css/contact-in-popup.css";

function ContactInPopup() {
  return (
    <div className="contact-in-popup-wrap">
      <UserAvatarCircle />
      <div className="contact-in-popup-content">
        <p>Name</p>
        <small>Who: Send what?</small>
      </div>
    </div>
  );
}

export default ContactInPopup;
