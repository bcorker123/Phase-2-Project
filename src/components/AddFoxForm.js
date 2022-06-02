import React, { useState } from "react";

function Form({ addFox }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });

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
  };

  return (
    <div className="add-fox-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="number(1-100)"
          name="number"
          value={formData.number}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
