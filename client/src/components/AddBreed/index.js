import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_BREED } from "../../utils/mutations";
import { QUERY_COLORS, QUERY_TEMPERAMENTS } from "../../utils/queries";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import ModalPage from "../Modal";

const AddBreed = () => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    hypoallergenic: "",
    colors: "",
    temperaments: "",
  });

  const [addBreed] = useMutation(ADD_BREED);
  const { data } = useQuery(QUERY_COLORS);
  const { data: temperamentsData } = useQuery(QUERY_TEMPERAMENTS);

  const colorsData = data?.colors || [];
  const temperamentsID = temperamentsData?.temperaments || [];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.hypoallergenic === "true") {
      formState.hypoallergenic = true;
    } else if (formState.hypoallergenic === "false") {
      formState.hypoallergenic = false;
    }

    try {
      const mutationResponse = await addBreed({
        variables: {
          name: formState.name,
          size: formState.size,
          hypoallergenic: formState.hypoallergenic,
          colors: formState.colors,
          temperaments: formState.temperaments,
        },
      });

      setResponse(mutationResponse);
    } catch (e) {
      console.error(e);
      alert("Please Fill Out all of the fields");
    }
  };

  return (
    <>
      <MDBContainer>
        <MDBRow className="collapseContent">
          <MDBCol md="6">
            <form onSubmit={handleFormSubmit}>
              <p className="h4 text-center mb-4">Add a Breed</p>
              <label className="grey-text">Breed name</label>
              <input
                name="name"
                type="name"
                id="breed"
                className="form-control"
                value={formState.name}
                onChange={handleChange}
                required="required"
              />
              <br />
              <label className="grey-text">Size</label>
              <select
                className="browser-default custom-select"
                onChange={handleChange}
                type="size"
                name="size"
                value={formState.size}
              >
                <option>Choose your option</option>
                <option value={"Small"}>Small</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Large"}>Large</option>
              </select>

              <label className="grey-text">hypoallergenic</label>
              <select
                className="browser-default custom-select"
                onChange={handleChange}
                type="hypoallergenic"
                name="hypoallergenic"
                value={formState.hypoallergenic}
              >
                <option>Choose your option</option>
                <option value={"true"}>True</option>
                <option value={"false"}>False</option>
              </select>

              <label className="grey-text">Colors</label>
              <select
                className="browser-default custom-select"
                onChange={handleChange}
                type="colors"
                name="colors"
                value={formState.colors}
              >
                <option>Choose your option</option>
                {colorsData.map((color) => {
                  return (
                    <option key={color._id} value={color._id}>
                      {color.name}
                    </option>
                  );
                })}
              </select>

              <label className="grey-text">Temperaments</label>
              <select
                className="browser-default custom-select"
                onChange={handleChange}
                type="temperaments"
                name="temperaments"
                value={formState.temperaments}
              >
                <option>Choose your option</option>
                {temperamentsID.map((temperament) => {
                  return (
                    <option key={temperament._id} value={temperament._id}>
                      {temperament.name}
                    </option>
                  );
                })}
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

export default AddBreed;
