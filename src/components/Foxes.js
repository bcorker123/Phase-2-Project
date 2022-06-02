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
        <li key={comment}>
          <em>"{comment}"</em>
        </li>
      );
    });

    return (
      <div className="fox" key={fox.id}>
        <h2 className="fox-name">{fox.name}</h2>
        <img className="fox-image" src={fox.image} alt={fox.name} />
        <AddCommentForm fox={fox} handleCommentSubmit={handleCommentSubmit} />
        <ul className="fox-comments">Comments:{comments}</ul>
      </div>
    );
  });

  return (
    <>
      <h1>Foxes</h1>
      {displayFoxes}
    </>
  );
}

export default Foxes;
