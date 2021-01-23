import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import { QUERY_DOGS } from "../../utils/queries";

import { UPDATE_DOGS } from "../../utils/actions";
import { useDispatch, useSelector } from "react-redux";

import { Table } from "react-bootstrap";

const DogsListAdmin = () => {
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
      console.log(loading);
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
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Hypoallergenic</th>
                  <th>Colors</th>
                </tr>
              </thead>
              <tbody>
                {filterDogsBreed().map((dog) => {
                  return (
                    <tr>
                      <td>{dog._id}</td>
                      <td>{dog.name}</td>
                      <td>{dog.size}</td>
                      <td>{dog.hypoallergenic.toString()}</td>
                      <td>
                        {dog.colors.map((color) => {
                          return color.name + ", ";
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        ) : (
          <h3>No dogs in the data</h3>
        )}
        {loading ? "loading dogs " : null}
      </div>
    </main>
  );
};
export default DogsListAdmin;
