import React from "react";
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

const DogsContainer = styled.div`
  min-height:100vh;
  display:flex;

  .filter-section{
    width:24%;
    border-right:1px solid #c7d2d9;
    background:#F7F9F9;
    margin-top:-1rem;
    padding-top:1rem;
  }
  
  .list-section{
    padding:0 2rem;
  }

  @media only screen and (max-width: 968px) {
    .filter-section{
      width:37%;
      border-right:1px solid #c7d2d9;  
    }
  }

  @media only screen and (max-width: 768px) {
    .filter-section{
      width:45%;
      border-right:1px solid #c7d2d9;    
    }
  }

  @media only screen and (max-width: 600px) {
    display:block;
    
    .list-section{
      padding:3rem;
    }

    .filter-section{
      width:100%;
      border-bottom:1px solid #c7d2d9;  
    }
  }

  @media only screen and (max-width: 400px) {
    .list-section{
      padding:1rem;
    }
  }
`
