import React from "react";

import { useSelector } from "react-redux";

import { Table } from "react-bootstrap";

const AdoptionListAdmin = () => {
    const state = useSelector((state) => {
      return state;
    });
  
    const { adoptions } = state;
 
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