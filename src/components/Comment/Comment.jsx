import React, { useState } from "react";
import "./CommentForm.css";

const CommentForm = () => {
  const [liked, setLiked] = useState(false);
  const [post, setPost] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

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
        <ul className="comment-list">
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentForm;
