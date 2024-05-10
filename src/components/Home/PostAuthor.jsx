import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar1.jpg";
import Profile from "../images/Profile picture.png";
import { avatar } from "@material-tailwind/react";

const PostAuthor = () => {
  return (
    <Link to={`/post/users/sdfsdf `} className="post_author">
      <div className="post_author-avatar">
        <img src={Profile} alt=""></img>
      </div>
      <div className=" w-60">
        <h5>By: test1@gmail.com</h5>
      </div>
    </Link>
  );
};

export default PostAuthor;
