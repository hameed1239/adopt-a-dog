import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { QUERY_USERS, QUERY_DOGS, QUERY_ADOPTION } from "../../utils/queries";
import { UPDATE_AN_ADOPTION } from "../../utils/mutations";
import { UPDATE_ADOPTION } from "../../utils/actions";
import { useDispatch, useSelector } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Container, Col, Form, Button } from "react-bootstrap";

import ModalPage from "../Modal";

const UpdateAdoption = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { adoptions } = state;

  const { loading, data: adoptData } = useQuery(QUERY_ADOPTION);
  const { data: userData } = useQuery(QUERY_USERS);
  const { data: dogData } = useQuery(QUERY_DOGS);
  const [updateAdoption] = useMutation(UPDATE_AN_ADOPTION);

  const userDataID = userData?.users || [];
  const dogDataID = dogData?.dogs || [];
  const adoptionData = adoptData?.adoptions || [];
  const [searchInput, setSearchInput] = useState("");
  const [searchedAdoption, setSearchedAdoption] = useState([]);

  const [formState, setFormState] = useState({
    _id: "",
    dog: "",
    user: "",
    requestDate: "",
    isApproved: "",
    approvedBy: "",
    approvalDate: "",
  });

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleSuccessClose = () => {
    setShow(false);
    window.location.reload(false);
  };
  const handleShow = () => setShow(true);

  const [response, setResponse] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await updateAdoption({
        variables: {
          _id: formState._id,
          dog: formState.dog,
          user: formState.user,
          isApproved: formState.isApproved,
        },
      });

      setResponse(mutationResponse);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (adoptData) {
      dispatch({
        type: UPDATE_ADOPTION,
        adoptions: adoptData.adoptions,
      });
    } else if (!loading) {
    }
  }, [adoptData, loading, dispatch, userData, dogData]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      return false;
    }

    try {
      if (!adoptions) {
        throw new Error("Unable to Find any Adopted Dog");
      }

      const response = adoptions.filter((adopt) => {
        return adopt._id === searchInput;
      });

      setFormState(...response);
      setSearchedAdoption(response);
    } catch (err) {
      console.log(err);
      alert("Please Fill Out all of the fields");
    }
  };

  return (
    <>
      <MDBContainer>
        <MDBRow className="collapseContent">
          <MDBCol md="6">
            <form onSubmit={handleFormSubmit}>
              <select
                className="browser-default custom-select"
                value={formState.firstName}
                // onChange={handleChange}
                onChange={(e) => setSearchInput(e.target.value)}
                type="searchInput"
                name="searchInput"
                value={searchInput}
              >
                <option>Choose your option</option>
                {adoptionData.map((adopt) => {
                  return (
                    <option value={adopt._id}>
                      {adopt.dog.name} Adopted by {adopt.user.firstName}{" "}
                      {adopt.user.lastName}
                    </option>
                  );
                })}
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

      {searchedAdoption.length > 0 && (
        <MDBContainer>
          <MDBRow className="collapseContent">
            <MDBCol md="6">
              <form onSubmit={handleEditFormSubmit}>
                <label className="grey-text">Dog's Name</label>
                <select
                  className="browser-default custom-select"
                  onChange={handleChange}
                  type="dog"
                  name="dog"
                  value={formState.dog}
                >
                  <option>Choose your option</option>

                  {dogDataID.map((dog) => {
                    return <option value={dog._id}>{dog.name}</option>;
                  })}
                </select>
                <label className="grey-text">User's Name</label>
                <select
                  className="browser-default custom-select"
                  onChange={handleChange}
                  type="user"
                  name="user"
                  value={formState.user}
                >
                  <option>Choose your option</option>
                  {userDataID.map((user) => {
                    return (
                      <option value={user._id}>
                        {user.firstName} {user.lastName}
                      </option>
                    );
                  })}
                </select>

                <label className="grey-text">isApproved</label>
                <input
                  type="isApproved"
                  name="isApproved"
                  value={formState.isApproved}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />

                <div className="text-center mt-4">
                  <MDBBtn color="success" type="submit" onClick={handleShow}>
                    Submit
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}

      {response && (
        <ModalPage
          show={show}
          handleClose={handleClose}
          handleSuccessClose={handleSuccessClose}
        />
      )}
    </>
  );
};

export default UpdateAdoption;

