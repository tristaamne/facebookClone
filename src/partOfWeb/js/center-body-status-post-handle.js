import React from "react";
import UserAvatarCircle from "./user-avatar-circle";
import "../css/center-body-status-post-handle.css";

function CenterBodyStatusPostHandle() {
  return (
    <div className="status-post-handle-box">
      <div className="status-post-handle up">
        <UserAvatarCircle />
        <p>Trí Tâm ơi, bạn đang nghĩ gì thế?</p>
      </div>
      <div className="status-post-handle down">
        <div className="status-post-btn live-stream-btn">
        <img style={{height:24}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/epGAMnVkMsy.png"></img>
          <p>Xem truc tiep</p>
        </div>
        <div className="status-post-btn pic-video-btn">
          <img style={{height:24}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/74AG-EvEtBm.png"></img>
          <p>Ảnh/Video</p>
        </div>
        <div className="status-post-btn emotion-btn">
          <img style={{height:24}} src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/_RWOIsUgWGL.png"></img>
          <p>Cảm xúc/hoạt động</p>
        </div>
      </div>
    </div>
  );
}

export default CenterBodyStatusPostHandle;
