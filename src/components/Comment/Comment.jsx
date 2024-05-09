import React, { useState } from "react";
import "./CommentForm.css";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentForm = () => {
  const [liked, setLiked] = useState(false);
  const [post, setPost] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle the clicked state
  };

  const handleLike = () => {
    setLiked(!liked);
    setPost(post + (liked ? -1 : 1));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      const newComments = [...comments, comment];
      setComments(newComments);
      setComment("");
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-input-container">
        <textarea
          className="comment-input"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
        <button className="comment-button" onClick={handleAddComment}>
          Comment
        </button>
      </div>
      <div className="comments-container">
        <h2>Comments:</h2>
        <div className="w-full bg-slate-200 rounded-xl">
          <ul className="">
            {comments.map((c, index) => (
              <div className="" key={index}>
                <li>{c}</li>

                <div className="flex flex-row gap-x-2">
                  <button onClick={handleLike}>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      style={{ color: liked ? "green" : "black" }}
                    />
                  </button>
                  <button onClick={handleClick}>
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      style={{
                        transform: clicked
                          ? "rotate(180deg)"
                          : "rotate(180deg)",
                        color: clicked ? "red" : "black",
                      }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
