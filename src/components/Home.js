import React from "react";

function Home({ foxes }) {
  const foxImages = foxes.map((fox) => {
    return (
      <img
        className="fox-image home"
        src={fox.image}
        alt={fox.name}
        key={fox.id}
      />
    );
  });

  return (
    <div id="home">
      <h1 className="home-title">Welcome to FoxBook!</h1>
      {foxImages}
    </div>
  );
}

export default Home;
