import React, { useEffect } from "react";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_BREEDS } from "../../utils/queries";
import { UPDATE_BREEDS } from "../../utils/actions";

import { useDispatch, useSelector } from "react-redux";

import { Table } from "react-bootstrap";

const BreedListAdmin = () => {
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
  return (
    <div className="container mt-20">
      <div className="flex-container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Hypoallergenic</th>
            </tr>
          </thead>
          <tbody>
            {breeds.map((breed, index) => {
              return (
                <tr key={breed._id}>
                  <td>{breed.name}</td>
                  <td>{breed.size}</td>
                  <td>{breed.hypoallergenic.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BreedListAdmin;
