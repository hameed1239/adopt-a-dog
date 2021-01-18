import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    <main id="dog">
      <section className="container">
        <h1>{currentDog.name}</h1>
        <h2>
          Size: <span className="black-font">{currentDog.size}</span> | Born:
          <span className="black-font">{currentDog.yearOfBirth}</span>
        </h2>
      </section>

      <section className="container mt-20">
        <img
          className="br-20 mb-20"
          src="https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg"
          width="100%"
          alt=""
        />

        <button>Suggested Donation: $150</button>

        <h3 className="mt-20">Story</h3>
        <p>
          <span>SALES PITCH!</span> {currentDog.story}
        </p>
      </section>
    </main>
  );
};

export default DogDetail;
