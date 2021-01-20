import React from "react";
import DogsBreed from "../components/DogsBreed";
import DogsList from "../components/DogsList";
import BreedMenu from "../components/BreedMenu";
import styled from 'styled-components';

const Dogs = () => {
  return (
    <DogsContainer >
      <div className="filter-section"><BreedMenu /></div>
      <div className="list-section"><DogsList /></div>
      
    </DogsContainer>
  );
};

export default Dogs;

const DogsContainer= styled.div`
  min-height:100vh;
  display:flex;

  .filter-section{
    width:22%;
    border-right:1px solid #c7d2d9  ;
    
  }
  .list-section{
    padding:0 2rem;
  }
`
