import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const UserListAdmin = () => {
  const state = useSelector((state) => {
    return state;
  });

  const { users } = state;

  return (
    <div className="container mt-20">
      <div className="flex-container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            { users.map((user, index) => {
              return (
                <tr key={ user._id }>
                  <td>{ user.firstName }</td>
                  <td>{ user.lastName }</td>
                  <td>{ user.email }</td>
                </tr>
              );
            }) }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserListAdmin;
