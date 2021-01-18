import React from "react";
import DogsList from "../components/DogsList";
import BreedMenu from "../components/BreedMenu";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <BreedMenu />
      <DogsList />
    </div>
  );
};

export default Home;
