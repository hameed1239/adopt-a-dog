import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import Dog from "../Dog";

import { QUERY_DOGS } from "../../utils/queries";

import { UPDATE_DOGS } from "../../utils/actions";
import { useDispatch, useSelector } from "react-redux";

const DogsList = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { currentBreed } = state;

  const { loading, data } = useQuery(QUERY_DOGS);

  const dogs = data?.dogs || [];

  console.log(dogs);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_DOGS,
        dogs: data.dogs,
      });
    } else if (!loading) {
      console.log(loading);
    }
  }, [dispatch, data, loading]);

  // console.log(state.dogs[0].name);
  function filterDogsSize() {
    if (!currentBreed) {
      return state.dogs;
    }
    return state.dogs.filter((dog) => dog.breed._id === currentBreed);
  }

  return (
    <main id="breeds">
      <div className="container mt-20">
        {dogs.length ? (
          <div className="flex-container">
            {filterDogsSize().map((dog) => {
              return (
                <Dog
                  key={dog._id}
                  _id={dog._id}
                  image={
                    "https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg"
                  }
                  name={dog.name}
                />
              );
            })}
          </div>
        ) : (
          <h3>No dogs in the data</h3>
        )}
        {loading ? "loading dogs " : null}
      </div>

      {/* <div className="container mt-20">
        <h3>Medium Breeds</h3>
        <div className="flex-container">
          <Dog />
        </div>
      </div>

      <div className="container mt-20">
        <h3>Small Breeds</h3>
        <div className="flex-container">
          <Dog />
        </div>
      </div> */}
    </main>
  );
};
export default DogsList;
