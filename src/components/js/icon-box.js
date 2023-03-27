import React, { useEffect } from "react";
import { ReactDOM } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import { useState } from "react";
import "../css/icon-box.css";

function Iconbox(pageIndex) {
  const [pageChange, setPageChange] = useState([0]);

  function pagechangeHandle(pageIndex) {
    setPageChange([pageIndex]);
  }

  return (
    <div className="headerIcon">
      <div
        className="icon-wrap"
        onClick={() => {
          pagechangeHandle(0);
        }}
      >
        <div className="icon-box">
          {pageChange == 0 ? (
            <HomeIcon
              style={{ color: "#2374e1" }}
              fontSize="large"
              className="icon"
            />
          ) : (
            <HomeOutlinedIcon
              style={{ color: "#B0B4B8" }}
              fontSize="large"
              className="icon"
            />
          )}
        </div>
        <div
          className="lineUnder"
          style={{ backgroundColor: pageChange == 0 ? "#2374e1" : "" }}
        ></div>
      </div>
      <div
        className="icon-wrap"
        onClick={() => {
          pagechangeHandle(1);
        }}
      >
        <div className="icon-box">
          <OndemandVideoOutlinedIcon
            style={{ color: pageChange == 1 ? "#2374e1" : "#B0B4B8" }}
            fontSize="large"
            className="icon"
          />
        </div>
        <div
          className="lineUnder"
          style={{ backgroundColor: pageChange == 1 ? "#2374e1" : "" }}
        ></div>
      </div>
      <div
        className="icon-wrap"
        onClick={() => {
          pagechangeHandle(2);
        }}
        id=""
      >
        <div className="icon-box" key={2}>
          <StorefrontOutlinedIcon
            style={{ color: pageChange == 2 ? "#2374e1" : "#B0B4B8" }}
            fontSize="large"
            className="icon"
          />
        </div>
        <div
          className="lineUnder"
          style={{ backgroundColor: pageChange == 2 ? "#2374e1" : "" }}
        ></div>
      </div>
      <div
        className="icon-wrap"
        onClick={() => {
          pagechangeHandle(3);
        }}
        id=""
      >
        <div className="icon-box">
          <SupervisedUserCircleOutlinedIcon
            style={{ color: pageChange == 3 ? "#2374e1" : "#B0B4B8" }}
            fontSize="large"
            className="icon"
          />
        </div>
        <div
          className="lineUnder"
          style={{ backgroundColor: pageChange == 3 ? "#2374e1" : "" }}
        ></div>
      </div>
      <div
        className="icon-wrap"
        onClick={() => {
          pagechangeHandle(4);
        }}
        id=""
      >
        <div className="icon-box">
          <VideogameAssetOutlinedIcon
            style={{ color: pageChange == 4 ? "#2374e1" : "#B0B4B8" }}
            fontSize="large"
            className="icon"
          />
        </div>
        <div
          className="lineUnder"
          style={{ backgroundColor: pageChange == 4 ? "#2374e1" : "" }}
        ></div>
      </div>
    </div>
  );
}

export default Iconbox;
