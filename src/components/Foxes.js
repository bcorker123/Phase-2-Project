import React, { useEffect } from "react";
import AddCommentForm from "./AddCommentForm";

function Foxes({ foxes, renderFoxes, handleCommentSubmit }) {
  useEffect(() => {
    fetch("http://localhost:3001/foxes")
      .then((r) => r.json())
      .then((foxes) => renderFoxes(foxes));
  });

  const displayFoxes = foxes.map((fox) => {
    const comments = fox.comments.map((comment) => {
      return (
        <p key={comment} className="comments">
          <em>"{comment}"</em>
        </p>
      );
    });

    return (
      <>
        <div className="fox" key={fox.id}>
          <h2 className="fox-name">🦊{fox.name}</h2>
          <img className="fox-image" src={fox.image} alt={fox.name} />
          <AddCommentForm fox={fox} handleCommentSubmit={handleCommentSubmit} />
          <div>
            Comments:
            {comments}
          </div>
        </div>
        <br />
      </>
    );
  });

  return (
    <div id="foxes">
      <h1 className="foxes-title">🦊🦊🦊Foxes🦊🦊🦊</h1>
      {displayFoxes}
    </div>
  );
}

export default Foxes;
