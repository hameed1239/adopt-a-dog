import React, { useEffect } from "react";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_BREEDS } from "../../utils/queries";
import { UPDATE_BREEDS, UPDATE_CURRENT_BREED } from "../../utils/actions";

import { useDispatch, useSelector } from "react-redux";

const BreedMenu = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { breeds } = state;
  const { loading, data: breedsData } = useQuery(QUERY_BREEDS);

  useEffect(() => {
    if (breedsData) {
      dispatch({
        type: UPDATE_BREEDS,
        breeds: breedsData.breeds,
      });
    } else if (!loading) {
    }
  }, [breedsData, loading, dispatch]);

  console.log(breeds);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_BREED,
      currentBreed: id,
    });
    console.log(id);
  };

  return (
    <main>
      <div className="container">
        <h1>Select a Breed</h1>
      </div>

      <div className="container">
        <button className="breed-labels" onClick={() => handleClick()}>
          All Breeds
        </button>
        {breeds.map((breed) => (
          <button
            key={breed._id}
            className="breed-labels"
            onClick={() => handleClick(breed._id)}
          >
            {breed.name}
          </button>
        ))}
      </div>
    </main>
  );
};

export default BreedMenu;
