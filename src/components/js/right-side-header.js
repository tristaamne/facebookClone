import React, { useState } from "react";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";
import DraftsRoundedIcon from "@mui/icons-material/DraftsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import "../css/right-side-header.css";
import UserAvatarCircle from "../../partOfWeb/js/user-avatar-circle";

function RightSideHeader({setSelected, selected}) {
  return (
    <div className="right-side-icon-box">
      <div
        className={
          selected === "0" ? "right-side-icon selected" : "right-side-icon"
        }
        onClick={() => {
          if (selected == "0") {
            setSelected("");
          } else {
            setSelected("0");
          }
        }}
      >
        <AppsRoundedIcon
          fontSize="large"
          style={{ color: selected === "0" ? "#2e89ff" : "#e4e6eb" }}
          className="icon"
        />
      </div>
      <div
        className="right-side-icon"
        onClick={() => {
          if (selected == "1") {
            setSelected("");
          } else {
            setSelected("1");
          }
        }}
      >
        {selected == 1 ? (
          <DraftsRoundedIcon
            fontSize="large"
            style={{ color: "#2e89ff" }}
            className="icon"
          />
        ) : (
          <LocalPostOfficeRoundedIcon
            fontSize="large"
            style={{ color: "#e4e6eb" }}
            className="icon"
          />
        )}
      </div>
      <div
        className="right-side-icon"
        onClick={() => {
          if (selected == "2") {
            setSelected("");
          } else {
            setSelected("2");
          }
        }}
      >
        {selected == 2 ? (
          <NotificationsActiveRoundedIcon
            fontSize="large"
            style={{ color: "#2e89ff" }}
            className="icon"
          />
        ) : (
          <NotificationsRoundedIcon
            fontSize="large"
            style={{ color: "#e4e6eb" }}
            className="icon"
          />
        )}
      </div>
      <div className="right-side-avatar">
        <UserAvatarCircle />
      </div>
    </div>
  );
}

export default RightSideHeader;
