import React from "react";

function Home({ foxes }) {
  const foxImages = foxes.map((fox) => {
    return (
      <img className="fox-image" src={fox.image} alt={fox.name} key={fox.id} />
    );
  });

  return (
    <h1>
      Welcome to FoxBook!
      {foxImages}
    </h1>
  );
}

export default Home;
