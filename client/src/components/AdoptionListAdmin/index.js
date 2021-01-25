import React, { useEffect } from "react";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_ADOPTION } from "../../utils/queries";


import { useDispatch, useSelector } from "react-redux";

import { Table } from "react-bootstrap";


const AdoptionListAdmin = () => {
    const state = useSelector((state) => {
      return state;
    });
  
  
    const { adoptions } = state;
    const { loading, data: adoptionData } = useQuery(QUERY_ADOPTION);
  
    
  
 
    return (
      <div className="container mt-20">
        <div className="flex-container">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Dog</th>
                <th>User</th>
                <th>Approved?</th>
              </tr>
            </thead>
            <tbody>
              {adoptions.map((adopt, index) => {
                return (
                  <tr key={adopt._id}>
                    <td>{adopt.dog.name}</td>
                    <td>{adopt.user.firstName}{adopt.user.lastName}</td>
                    <td>{(adopt.isApproved).toString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  };
  
  export default AdoptionListAdmin;