import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import {
  QUERY_USERS
} from "../../utils/queries";
import { DELETE_A_USER } from "../../utils/actions";
import { useDispatch, useSelector } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { DELETE_USER } from "../../utils/mutations";

const DeleteUser = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const { users } = state;
  const { loading, data: userData } = useQuery(QUERY_USERS);
  const userDataID = userData?.users || [];
  const [searchInput, setSearchInput] = useState("");
  const [delUserState, setDeleteUser] = useState(false);
  const [deleteUser] = useMutation(DELETE_USER);

  useEffect(() => {
    if (delUserState) {
      dispatch({
        type: DELETE_A_USER,
        users: userData.users,
      });
      setDeleteUser(false);
    } else if (!loading) {
    }
  }, [userData, loading, dispatch, delUserState]);


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {

      if (!users) {
        throw new Error("Unable to Find any User");
      }

      const response = users.filter((user) => {
        if (user._id === searchInput) {
          try {
            async function delUser() {
              const mutationResponse = await deleteUser({
                variables: {
                  _id: user._id
                },
              });
              if (mutationResponse) {
                alert("You have successfully Deleted a User");
                let index = userData.users.indexOf(user._id);
                userData.users.splice(index, 1);
                setDeleteUser(true);
              }
            }
            delUser();
          }
          catch (e) {
            console.error(e);
          }
        }
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={ handleFormSubmit }>
              <p className="h4 text-center mb-4">Find a User</p>
              <select
                className="browser-default custom-select"
                onChange={ (e) => setSearchInput(e.target.value) }
                type="searchInput"
                name="searchInput"
                value={ searchInput }
              >
                <option>Choose your option</option>
                { userDataID.map((user) => {
                  return <option key={ user._id } value={ user._id }>{ user.firstName }</option>;
                }) }
              </select>

              <div className="text-center mt-4">
                <MDBBtn color="success" type="submit">
                  Submit
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default DeleteUser;