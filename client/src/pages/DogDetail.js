import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { QUERY_DOGS } from "../utils/queries";
import { UPDATE_DOGS } from "../utils/actions";

import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";

const DogDetail = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { id } = useParams();

  const [currentDog, setCurrentDog] = useState({});

  const { loading, data } = useQuery(QUERY_DOGS);

  const { dogs } = state;

  console.log(dogs);

  useEffect(() => {
    if (dogs.length) {
      setCurrentDog(dogs.find((dog) => dog._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_DOGS,
        dogs: data.dogs,
      });
    }
  }, [dogs, data, loading, dispatch, id]);

  return (
    <DetailDogEL id="dog">
      <section className="container">
      <img
          className="mb-20"
          src="https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg"
          width="100%"
          alt=""
        />
       
      </section>

      <section className="container mt-20">
        <h1>{currentDog.name}  </h1>
       
        <div>
         
            <p>Size: <span >{currentDog.size}</span> </p>
            <p>Weight: <span >{currentDog.weight}</span></p>
            <p> Height: <span >{currentDog.height}</span> </p>
            <p>Born: <span >{currentDog.yearOfBirth}</span></p>
           
            <h4>Story</h4>
            <p>
            {currentDog.story}
          </p>

        </div>
        
        <div className="buttons">
          
          <Link to="/donate"><button className="btn-adopt"> Adopt Me </button></Link>
          <Link to="/donate"><button className="btn-donate"> Donate </button></Link>
        </div>

      </section>
    </DetailDogEL>
  );
};

const DetailDogEL = styled.main`
background-color:white;
display:flex;
flex-wrap:wrap;
justify-content:space-between;

section{
  width:40%; 
  margin-top:3rem;
  h1{
    font-size:2rem;
  }

  img{
    margin-top:3rem;
        box-shadow: 2px 1px 57px -3px rgba(128,144,170,0.75);
    -webkit-box-shadow: 2px 1px 57px -3px rgba(128,144,170,0.75);
    -moz-box-shadow: 2px 1px 57px -3px rgba(128,144,170,0.75);
  }
  .buttons{
    align-content:center;
    text-align:center;
    margin-top:2rem;
    
  }
  
  .buttons a button{
    ${'' /* display:block; */}
    padding:.6rem 3rem !important;
    margin:.6rem .3rem !important;
    text-decoration: none !important;
    border-radius:none;
    transition:ease-in-out .2s;
    cursor:pointer;
    
    }
  .buttons a button:hover{
    box-shadow: 2px 1px 9px 0px rgba(186,201,227,0.75);
    -webkit-box-shadow: 2px 1px 9px 0px rgba(186,201,227,0.75);
    -moz-box-shadow: 2px 1px 9px 0px rgba(186,201,227,0.75);
    transform:scale(1.01);
    color:black;
    background: rgb(130,246,165);
    background: linear-gradient(90deg, rgba(130,246,165,1) 50%, rgba(147,238,169,1) 100%);
  }

  .btn-donate{
    
    margin-top:2rem;
    box-shadow: 2px 1px 37px 1px rgba(141,159,193,0.75);
-webkit-box-shadow: 2px 1px 37px 1px rgba(141,159,193,0.75);
-moz-box-shadow: 2px 1px 37px 1px rgba(141,159,193,0.75);
    color:white;
    background: rgb(68,223,115);
    background: linear-gradient(90deg, rgba(68,223,115,1) 50%, rgba(97,232,129,1) 100%);
  }
  .btn-adopt{
    background-color:#e5ecf0;
  }
  span{
    color:gray;
    margin-left:.4rem;
  }
  p{
    line-height:1.9rem;
  }
}




`

export default DogDetail;
