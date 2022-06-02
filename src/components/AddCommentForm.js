import React, { useState } from "react";

function AddCommentForm({ fox: { name, id }, handleCommentSubmit }) {
  const [comment, setComment] = useState("");

  const handleInput = ({ target: { value } }) => {
    setComment(value);
  };

  const handleSubmit = (e) => {
    handleCommentSubmit(e, comment, id);
    setComment("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label className="comment-form">Add comment to {name}'s profile</label>
      <input
        className="comment-form"
        type="text"
        placeholder="something nice"
        value={comment}
        onChange={handleInput}
      ></input>
      <button className="comment-form" type="submit">
        Add Comment
      </button>
    </form>
  );
}

export default AddCommentForm;
