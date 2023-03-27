import React from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import "../css/reel.css";

function Reel() {
  return (
    <div className="reel-content-box">
      <img
        className="reel-content"
        src="https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ce12209d84c8911f6de681e8aea47af5~c5_720x720.jpeg?x-expires=1679968800&x-signature=U%2Bq4R5rkW14hbOwFHqLvosfaKRs%3D"
      ></img>
      <div className="reel-index">
        <p>
          <PlayArrowRoundedIcon />
          <p>6.3 Triệu</p>
        </p>
      </div>
    </div>
  );
}

export default Reel;
