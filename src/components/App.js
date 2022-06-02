import "../App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Form from "./AddFoxForm";
import Home from "./Home";
import Foxes from "./Foxes";

function App() {
  const [foxes, setFoxes] = useState([]);

  const renderFoxes = (data) => {
    setFoxes(data);
  };

  const addFox = (newFox) => {
    fetch("http://localhost:3001/foxes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFox),
    })
      .then((r) => r.json())
      .then((newFox) => setFoxes([...foxes, newFox]));
  };

  const handleCommentSubmit = (e, comment, id) => {
    e.preventDefault();
    const newCommentsArr = [...foxes[id - 1].comments, comment];
    fetch(`http://localhost:3001/foxes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comments: newCommentsArr }),
    });
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/foxes/new">
          <Form addFox={addFox} />
        </Route>
        <Route path="/foxes">
          <Foxes
            foxes={foxes}
            renderFoxes={renderFoxes}
            handleCommentSubmit={handleCommentSubmit}
          />
        </Route>
        <Route exact path="/">
          <Home foxes={foxes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
// 1. You must make a single page application (only one index.html file)
// using create-react-app.

// 2. Your app should use at least 5 components in a way that keeps your
// code well organized.

// 3. There should be at least 3 client-side routes using React Router
// Be sure to include a nav bar or other UI element that allows users to
// navigate between routes.

// 4. Use a json-server to create a RESTful API for your backend and
// make both a GET and a POST request to the json server. Use a form
// to make your post request, specifically a controlled form/component.
// Additionally, you may choose to incorporate data from an external API
// but it is not required. You should keep your json-server data simple:
// avoid nested data and associations. You'll learn how to work with
// more complex data in the next two phases. Focus on the frontend for
// this project.

// 5. Add some styling: you're encouraged to write your CSS from scratch,
// either by using styled components or writing CSS files and using
// id/className to style your elements. You can also incorporate a UI
// framework (like React Bootstrap, Semantic UI , or Material UI) if
// you prefer.
