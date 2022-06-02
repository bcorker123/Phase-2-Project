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
    <form onSubmit={handleSubmit}>
      <label>Add comment to {name}'s profile</label>
      <input
        type="text"
        placeholder="something nice"
        value={comment}
        onChange={handleInput}
      ></input>
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default AddCommentForm;
