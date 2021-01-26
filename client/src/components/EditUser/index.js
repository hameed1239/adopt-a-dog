import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import ModalPage from "../Modal";
import { QUERY_USERS, QUERY_USER } from "../../utils/queries";
import { UPDATE_A_USER } from "../../utils/actions";
import { UPDATE_USER } from "../../utils/mutations";
import { useDispatch, useSelector } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Container, Col, Form, Button } from "react-bootstrap";

const EditUser = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { users } = state;

  const { loading, data: userData } = useQuery(QUERY_USERS);
  const { singleUserLoad, data: singleUser } = useQuery(QUERY_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const userDataID = userData?.users || [];

  const [searchInput, setSearchInput] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);

  const [formState, setFormState] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    otherDogs: 0,
    noOfKids: 0,
    houseOrApartment: "",
    isAdmin: "",
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
      if (formState.isAdmin === "true") {
        formState.isAdmin = true;
      } else {
        formState.isAdmin = false;
      }
      const mutationResponse = await updateUser({
        variables: {
          _id: formState._id,
          firstName: formState.firstName,
          lastName: formState.lastName,
          address: formState.address,
          city: formState.city,
          state: formState.state,
          zip: formState.zip,
          phone: parseInt(formState.phone),
          otherDogs: parseInt(formState.otherDogs),
          noOfKids: parseInt(formState.noOfKids),
          houseOrApartment: formState.houseOrApartment,
          isAdmin: formState.isAdmin,
        },
      });

      setResponse(mutationResponse);
    } catch (e) {
      alert("Please Fill Out all of the fields");
    }
  };

  useEffect(() => {
    if (userData) {
      dispatch({
        type: UPDATE_A_USER,
        users: userData.users,
      });
    } else if (!loading) {
    }
  }, [userData, loading, dispatch]);

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
        return user._id === searchInput;
      });

      setFormState(...response);
      setSearchedUser(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MDBContainer>
        <MDBRow className="collapseContent">
          <MDBCol md="6">
            <form onSubmit={handleFormSubmit}>
              <p className="h4 text-center mb-4">Find a User</p>
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
                {userDataID.map((user) => {
                  return (
                    <option key={user._id} value={user._id}>
                      {user.firstName}
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

      {searchedUser.length > 0 && (
        <MDBContainer>
          <MDBRow className="collapseContent">
            <MDBCol md="6">
              <form onSubmit={handleEditFormSubmit}>
                <label className="grey-text">Update User First Name</label>
                <input
                  name="firstName"
                  type="firstName"
                  id="user"
                  className="form-control"
                  value={formState.firstName}
                  onChange={handleChange}
                  required="required"
                />
                <label className="grey-text">LastName</label>
                <input
                  type="lastName"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />

                <label className="grey-text">Address</label>
                <input
                  type="address"
                  name="address"
                  value={formState.address}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />

                <label className="grey-text">City</label>
                <input
                  type="city"
                  name="city"
                  value={formState.address}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />
                <label className="grey-text">State</label>
                <input
                  type="state"
                  name="state"
                  value={formState.state}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />
                <label className="grey-text">Zip</label>
                <input
                  type="zip"
                  name="zip"
                  value={formState.zip}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />
                <label className="grey-text">Phone</label>
                <input
                  type="number"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />
                <label className="grey-text">Other Dogs</label>
                <input
                  type="number"
                  name="otherDogs"
                  value={formState.otherDogs}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />
                <label className="grey-text">Number of Kids</label>
                <input
                  type="number"
                  name="noOfKids"
                  value={formState.noOfKids}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />
                <label className="grey-text">House or Apartment</label>
                <input
                  type="houseOrApartment"
                  name="houseOrApartment"
                  value={formState.houseOrApartment}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />
                <label className="grey-text">Is the User an admin</label>
                <select
                  className="browser-default custom-select"
                  value={formState.isAdmin}
                  onChange={handleChange}
                  type="isAdmin"
                  name="isAdmin"
                  value={formState.isAdmin}
                >
                  <option>Choose your option</option>
                  <option value='true'>True</option>
                  <option value='false'>False</option>
                </select>
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

export default EditUser;
