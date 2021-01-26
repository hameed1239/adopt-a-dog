import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_DOG } from "../../utils/mutations";
import {
  QUERY_COLORS,
  QUERY_TEMPERAMENTS,
  QUERY_BREEDS,
} from "../../utils/queries";

import ModalPage from "../Modal";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const AddDog = () => {
  const [formState, setFormState] = useState({
    name: "",
    height: "",
    weight: "",
    yearOfBirth: "",
    size: "",
    gender: "",
    hypoallergenic: "",
    story: "",
    colors: "",
    breed: "",
    temperaments: "",
    // imgUrl: "",
    // status: ""
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

  // Dogs, Colors, and Breeds Data Query
  const [addDog] = useMutation(ADD_DOG);
  const { data } = useQuery(QUERY_COLORS);
  const { data: temperamentsData } = useQuery(QUERY_TEMPERAMENTS);
  const { data: breedsData } = useQuery(QUERY_BREEDS);

  const colorsData = data?.colors || [];
  const temperamentsID = temperamentsData?.temperaments || [];
  const breedsDataID = breedsData?.breeds || [];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.hypoallergenic === "true") {
      formState.hypoallergenic = true;
    } else if (formState.hypoallergenic === "false") {
      formState.hypoallergenic = false;
    }

    formState.yearOfBirth = parseInt(formState.yearOfBirth);

    try {
      const mutationResponse = await addDog({
        variables: {
          name: formState.name,
          height: formState.height,
          weight: formState.weight,
          yearOfBirth: formState.yearOfBirth,
          gender: formState.gender,
          size: formState.size,
          hypoallergenic: formState.hypoallergenic,
          story: formState.story,
          colors: formState.colors,
          breed: formState.breed,
          temperaments: formState.temperaments,
          imgUrl: "0.jpg",
        },
      });

      setResponse(mutationResponse);
    } catch (e) {
      alert("Please Fill Out all of the fields");
    }
  };

  return (
    <>
      <MDBContainer>
        <MDBRow className="collapseContent">
          <MDBCol md="6">
            <form onSubmit={handleFormSubmit}>
              <p className="h4 text-center mb-4">Add a Dog</p>
              <label className="grey-text">Dog name</label>
              <input
                name="name"
                type="name"
                id="breed"
                className="form-control"
                value={formState.name}
                onChange={handleChange}
                required="required"
              />

              <label className="grey-text">Height</label>
              <input
                type="height"
                name="height"
                value={formState.height}
                onChange={handleChange}
                className="form-control"
                required="required"
              />

              <label className="grey-text">Weight</label>
              <input
                type="weight"
                name="weight"
                value={formState.weight}
                onChange={handleChange}
                className="form-control"
                required="required"
              />

              <label className="grey-text">Year Of Birth</label>
              <input
                type="yearOfBirth"
                name="yearOfBirth"
                value={formState.yearOfBirth}
                onChange={handleChange}
                className="form-control"
                required="required"
              />

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

              <label className="grey-text">Gender</label>
              <select
                className="browser-default custom-select"
                onChange={handleChange}
                type="gender"
                name="gender"
                value={formState.gender}
              >
                <option>Choose your option</option>
                <option value={"Female"}>Female</option>
                <option value={"Male"}>Male</option>
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

              <label className="grey-text">Story</label>
              <textarea
                type="story"
                name="story"
                value={formState.story}
                onChange={handleChange}
                className="form-control"
                required="required"
              />

              <label className="grey-text">Breed</label>
              <select
                className="browser-default custom-select"
                onChange={handleChange}
                type="breed"
                name="breed"
                value={formState.breed}
              >
                <option>Choose your option</option>
                {breedsDataID.map((breedID) => {
                  return (
                    <option key={breedID._id} value={breedID._id}>
                      {breedID.name}
                    </option>
                  );
                })}
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

export default AddDog;
