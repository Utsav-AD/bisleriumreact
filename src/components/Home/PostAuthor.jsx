import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link to={`/post/users/sdfsdf `} className="post_author">
      <div className="post_author-avatar">
        <img src={Avatar} alt=""></img>
      </div>
      <div className="post_author-details">
        <h5>By: Ernest Achiever</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
