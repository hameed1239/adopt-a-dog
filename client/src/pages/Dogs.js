import React from "react";
import DogsBreed from "../components/DogsBreed";
import DogsList from "../components/DogsList";
import BreedMenu from "../components/BreedMenu";

const Dogs = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <BreedMenu />
      <DogsList />
    </div>
  );
};

export default Dogs;
