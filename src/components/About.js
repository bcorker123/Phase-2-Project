import React from "react";
function About() {
  return (
    <div className="fox">
      This single page application uses 7 components:
      <ul className="add-fox-form">
        <strong>App.js</strong>:
        <div className="fox-name">
          <li>
            Uses a json-server to create a RESTful API for the backend and makes
            a GET AND POST request to the json server
          </li>
        </div>
      </ul>
      <ul className="add-fox-form">
        <strong>Home.js</strong>:
        <div className="fox-name">
          <li>Home Page button</li>
          <li>Welcomes the user and displays fox images on load</li>
        </div>
      </ul>
      <ul className="add-fox-form">
        <strong>NavBar.js</strong>:
        <div className="fox-name">
          <li>Allows a user to navigate between routes</li>
          <li>Uses 4 client-side routes</li>
          <li>
            User can interact with the browser by clicking the different options
            on the NavBar
          </li>
          <li>Clicking Home will bring you back to the home page</li>
          <li>Clicking Foxes will bring you to the foxes page, etc</li>
        </div>
      </ul>
      <ul className="add-fox-form">
        <strong>Foxes.js</strong>:
        <div className="fox-name">
          <li>
            Fetches fox data from API with a GET request and displays the images
            on the browser.
          </li>{" "}
          <li>constructs the skeleton of each fox container</li>
        </div>
      </ul>
      <ul className="add-fox-form">
        <strong>AddCommentForm.js</strong>:
        <div className="fox-name">
          <li>User can add comments to selected fox</li>
          <li>Added comments persist in the backend</li>
        </div>
      </ul>
      <ul className="add-fox-form">
        <strong>AddFoxForm.js</strong>:
        <div className="fox-name">
          <li>User can create their own fox by filling out the form</li>
        </div>{" "}
      </ul>
      <ul className="add-fox-form">
        <strong>About.js</strong>:
        <div className="fox-name">
          <li>This Page</li>
        </div>{" "}
      </ul>
    </div>
  );
}

export default About;
