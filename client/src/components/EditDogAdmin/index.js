import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import ModalPage from "../Modal";
import {
  QUERY_BREEDS,
  QUERY_COLORS,
  QUERY_DOGS,
  QUERY_TEMPERAMENTS,
} from "../../utils/queries";
import { UPDATE_A_DOG, REMOVE_A_DOG } from "../../utils/mutations";
import { UPDATE_DOGS } from "../../utils/actions";

import { useDispatch, useSelector } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const EditDog = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { dogs } = state;

  const [updateDog] = useMutation(UPDATE_A_DOG);
  const [removeDog] = useMutation(REMOVE_A_DOG);

  const { loading, data: dogsData } = useQuery(QUERY_DOGS);
  const { data: breedsData } = useQuery(QUERY_BREEDS);
  const { data } = useQuery(QUERY_COLORS);
  const { data: temperamentsData } = useQuery(QUERY_TEMPERAMENTS);

  const colorsData = data?.colors || [];
  const temperamentsID = temperamentsData?.temperaments || [];
  const breedsDataID = breedsData?.breeds || [];
  const dogsDataID = dogsData?.dogs || [];

  const [searchInput, setSearchInput] = useState("");
  const [searchedDog, setSearchedDog] = useState([]);

  const [formState, setFormState] = useState({
    _id: "",
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

  const handleRemoveSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationRemoveResponse = await removeDog({
        variables: {
          _id: searchInput,
        },
      });

      if (mutationRemoveResponse) {
        alert("You have successfully Remove a Dog");
      }
    } catch (e) {}
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();


    if (formState.hypoallergenic === "true") {
      formState.hypoallergenic = true;
    } else if (formState.hypoallergenic === "false") {
      formState.hypoallergenic = false;
    }

    formState.yearOfBirth = parseInt(formState.yearOfBirth);

    try {
      const mutationResponse = await updateDog({
        variables: {
          _id: formState._id,
          name: formState.name,
          height: formState.height,
          weight: formState.weight,
          yearOfBirth: formState.yearOfBirth,
          size: formState.size,
          gender: formState.gender,
          story: formState.story,
          hypoallergenic: formState.hypoallergenic,
          colors: formState.colors,
          temperaments: formState.temperaments,
          breed: formState.breed,
        },
      });

      setResponse(mutationResponse);
    } catch (e) {
      console.error(e);
      alert("You have Fill Out all the Fields");
    }
  };

  useEffect(() => {
    if (dogsData) {
      dispatch({
        type: UPDATE_DOGS,
        dogs: dogsData.dogs,
      });
    } else if (!loading) {
    }
  }, [dogsData, loading, dispatch]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      if (!dogs) {
        throw new Error("Unable to Find any Dog");
      }

      const response = dogs.filter((dog) => {
        return dog._id === searchInput;
      });

      setFormState(...response);
      setSearchedDog(response);
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
              <p className="h4 text-center mb-4">Find a Dog</p>
              <select
                className="browser-default custom-select"
                value={formState.colors}
                // onChange={handleChange}
                onChange={(e) => setSearchInput(e.target.value)}
                type="searchInput"
                name="searchInput"
                value={searchInput}
                multiple={false}
              >
                <option>Choose your option</option>
                {dogsDataID.map((dog) => {
                  return (
                    <option key={dog._id} value={dog._id}>
                      {dog.name}
                    </option>
                  );
                })}
              </select>

              <div className="text-center mt-4">
                <MDBBtn color="success" type="submit">
                  Submit
                </MDBBtn>
                <MDBBtn color="danger" onClick={handleRemoveSubmit}>
                  Remove
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {searchedDog.length > 0 && (
        <MDBContainer>
          <MDBRow className="collapseContent">
            <MDBCol md="6">
              <form onSubmit={handleEditFormSubmit}>
                <label className="grey-text">Update Dog name</label>
                <input
                  name="name"
                  type="name"
                  id="breed"
                  className="form-control"
                  value={formState.name}
                  onSelect={handleChange}
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
                <label className="grey-text">Story</label>
                <textarea
                  type="story"
                  name="story"
                  value={formState.story}
                  onChange={handleChange}
                  className="form-control"
                  required="required"
                />

                <label className="grey-text">hypoallergenic</label>
                <select
                  className="browser-default custom-select"
                  value={formState.size}
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
                  value={formState.colors}
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

                <label className="grey-text">Breed</label>
                <select
                  className="browser-default custom-select"
                  value={formState.breed}
                  onChange={handleChange}
                  type="breed"
                  name="breed"
                  value={formState.breed}
                >
                  <option>Choose your option</option>
                  {breedsDataID.map((breed) => {
                    return <option value={breed._id}>{breed.name}</option>;
                  })}
                </select>

                <label className="grey-text">Temperaments</label>
                <select
                  className="browser-default custom-select"
                  value={formState.temperaments}
                  onChange={handleChange}
                  type="temperaments"
                  name="temperaments"
                  value={formState.temperaments}
                  multiple={false}
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

export default EditDog;
