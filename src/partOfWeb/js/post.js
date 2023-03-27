import React from "react";
import UserAvatarCircle from "./user-avatar-circle";
import "../css/post.css";

function Post(user) {
  return (
    <div className="post-box">
      <div className="post-header">
        <UserAvatarCircle />
        <div className="post-header-name-time">
          <p className="post-header-user-name">{user.name}</p>
          <div className="posttime-mode">
            <p className="post-time">real time shit</p>
            {/* <p className='mode-icon'>mode icon here</p> */}
          </div>
        </div>
      </div>
      <p className="post-content">As you can see down here, this is a Hà Mã</p>
      <img
        className="post-img"
        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/337140067_609004134089367_408062151757378643_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=iloYqh7dUdUAX9JUm5t&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCZBl4bmTuW3tc4YqJho2VZXeK_Cm8l2oISUQtT0XNi5A&oe=6425DE2A"
      ></img>
    </div>
  );
}

export default Post;
