import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_ADOPTION } from "../../utils/mutations";
import { QUERY_DOGS, QUERY_USERS } from "../../utils/queries";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "react-datepicker/dist/react-datepicker.css";
const AddAdoption = () => {
  const [formState, setFormState] = useState({
    dog: "",
    user: "",
    requestDate: "",
    isApproved: "",
    approvalDate: "",
  });

  const [addAdoption] = useMutation(ADD_ADOPTION);
  const { data } = useQuery(QUERY_DOGS);

  const { data: userData } = useQuery(QUERY_USERS);
  const dogsData = data?.dogs || [];
  const userDataID = userData?.users || [];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formState.isApproved === "true") {
        formState.isApproved = true;
      }
      else {
        formState.isApproved = false;
      }
      const mutationResponse = await addAdoption({
        variables: {
          dog: formState.dog,
          user: formState.user,
          requestDate: Date.parse(formState.requestDate).toString(),
          isApproved: formState.isApproved,
          approvalDate: Date.parse(formState.approvalDate).toString()
        },
      });
      if (mutationResponse) {
        alert("You have successfully Added a dog that got adopted");
      }
    } catch (e) {
      console.error(e);
      setFormState({
        dog: "",
        user: "",
        requestDate: "",
        isApproved: "",
        approvedBy: "",
        approvalDate: "",
      });
    }
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={ handleFormSubmit }>

            <label className="grey-text">Dog Name</label>
            <select
              className="browser-default custom-select"
              onChange={ handleChange }
              type="dog"
              name="dog"
              value={ formState.dog }
            >
              <option>Choose your option</option>
              { dogsData.map((dog) => {
                return <option key={ dog._id } value={ dog._id }>{ dog.name }</option>;
              }) }
            </select>
            <br />
            <label className="grey-text">User Name</label>
            <select
              className="browser-default custom-select"
              onChange={ handleChange }
              type="user"
              name="user"
              value={ formState.user }
            >
              <option>Choose your option</option>
              { userDataID.map((user) => {
                return <option key={ user._id } value={ user._id }>{ user.firstName } { user.lastName }</option>;
              }) }
            </select>
            <label className="grey-text">Request Date(January 01, 1970)</label>
            <input
              type="requestDate"
              name="requestDate"
              value={ formState.requestDate }
              onChange={ handleChange }
              className="form-control"
              required="required"
            />
            <label className="grey-text">Approved?</label>
            <select
              className="browser-default custom-select"
              value={ formState.isApproved }
              onChange={ handleChange }
              type="isApproved"
              name="isApproved"
            >
              <option>Choose your option</option>
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
            <label className="grey-text">Approval Date(January 01, 1970)</label>
            <input
              type="approvalDate"
              name="approvalDate"
              value={ formState.approvalDate }
              onChange={ handleChange }
              className="form-control"
              required="required"
            />
            <div className="text-center mt-4">
              <MDBBtn color="success" type="submit">
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddAdoption;
