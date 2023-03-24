import React from "react";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import '../css/reel.css'

function Reel() {
  return (
    <div className="reel-content-box">
      <img
        className="reel-content"
        src="https://scontent.fhan5-8.fna.fbcdn.net/v/t15.5256-10/335916042_927287225092415_4098857463482998295_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=lidlgxhPbRwAX9pD6C6&_nc_ht=scontent.fhan5-8.fna&oh=00_AfDJUaq0v_Ka82_eOuKWIaXHwNii8Sa0dphF7M_Ya_riFA&oe=64143A6D"
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
