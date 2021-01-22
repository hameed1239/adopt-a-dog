import React, { useEffect } from "react";
import styled from 'styled-components';


import { useQuery } from "@apollo/react-hooks";
import { QUERY_BREEDS } from "../../utils/queries";
import { UPDATE_BREEDS, UPDATE_CURRENT_BREED } from "../../utils/actions";

import { useDispatch, useSelector } from "react-redux";

import { Dropdown } from "react-bootstrap";

const BreedMenu = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { breeds, temperaments } = state;
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

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_BREED,
      currentBreed: id,
    });
    console.log(id);
  };

  return (
    <BreedMenuEL>
      <div className="container">
        <h1>Filter</h1>
      </div>

      <div className="container">
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className="breed-labels"
            variant="none"
          >
            Breeds
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              // className="breed-labels"
              onClick={() => handleClick()}
            >
              All Breeds
            </Dropdown.Item>

            {breeds.map((breed) => (
              <Dropdown.Item
                key={breed._id}
                onClick={() => handleClick(breed._id)}
              >
                {breed.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </BreedMenuEL>
  );
};

export default BreedMenu;

const BreedMenuEL = styled.main`
.breed-labels{
  width:100%;
  text-align:left;
}

.dropdown-item{
  width:100%;
  ${'' /* color:#767777; */}
  font-size:.9rem;

}
h1{
  text-align:left;
  font-size:1rem;
  ${'' /* background:#f2f6f9; */}
  border-radius:.5rem;
  border:1px solid #e6ebee;
  width:100%;
  margin:1rem 0;
  padding:.3rem;
  line-height:2rem;
  font-weight:normal;
}
`
