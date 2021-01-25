import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import Dog from "../Dog";

import { QUERY_DOGS } from "../../utils/queries";

import { UPDATE_DOGS } from "../../utils/actions";
import { useDispatch, useSelector } from "react-redux";

// import { idbPromise } from "../../utils/helpers";

const DogsList = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { currentBreed } = state;

  const { loading, data } = useQuery(QUERY_DOGS);

  const dogs = data?.dogs || [];

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_DOGS,
        dogs: data.dogs,
      });
    } else if (!loading) {
    }
  }, [dispatch, data, loading]);

  function filterDogsBreed() {
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
            {filterDogsBreed().map((dog) => {
              return (
                <Dog
                  key={dog._id}
                  _id={dog._id}
                  image={`/images/${dog.imgUrl}`}
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
    </main>
  );
};
export default DogsList;
