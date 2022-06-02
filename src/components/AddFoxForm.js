import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Form({ addFox }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });

  const history = useHistory();

  const handleInput = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFox = {
      name: formData.name,
      image: `https://randomfox.ca/images/${formData.number}.jpg`,
      comments: [],
    };
    addFox(newFox);
    history.push("/foxes");
  };

  return (
    <div id="fox-form">
      <h1 id="form-title">Add a Fox! 🦊</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="add-fox-form"
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
        <input
          className="add-fox-form"
          type="text"
          placeholder="number(1-100)"
          name="number"
          value={formData.number}
          onChange={handleInput}
        />
        <button className="add-fox-form" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
