import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import ModalPage from "../Modal";

import {
  QUERY_BREEDS,
  QUERY_COLORS,
  QUERY_TEMPERAMENTS,
} from "../../utils/queries";
import { UPDATE_A_BREED } from "../../utils/mutations";
import { UPDATE_BREEDS } from "../../utils/actions";

import { useDispatch, useSelector } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const EditBreed = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { breeds } = state;

  const { loading, data: breedsData } = useQuery(QUERY_BREEDS);
  const [updateBreed] = useMutation(UPDATE_A_BREED);
  const { data } = useQuery(QUERY_COLORS);
  const { data: temperamentsData } = useQuery(QUERY_TEMPERAMENTS);

  const colorsData = data?.colors || [];
  const temperamentsID = temperamentsData?.temperaments || [];
  const breedsDataID = breedsData?.breeds || [];

  const [searchInput, setSearchInput] = useState("");
  const [searchedBreed, setSearchedBreed] = useState([]);

  const [formState, setFormState] = useState({
    _id: "",
    name: "",
    size: "",
    hypoallergenic: "",
    colors: "",
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

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.hypoallergenic === "true") {
      formState.hypoallergenic = true;
    } else if (formState.hypoallergenic === "false") {
      formState.hypoallergenic = false;
    }

    try {
      const mutationResponse = await updateBreed({
        variables: {
          _id: formState._id,
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

  useEffect(() => {
    if (breedsData) {
      dispatch({
        type: UPDATE_BREEDS,
        breeds: breedsData.breeds,
      });
    } else if (!loading) {
    }
  }, [breedsData, loading, dispatch]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      if (!breeds) {
        throw new Error("Unable to Find any Breed");
      }

      const response = breeds.filter((breed) => {
        return breed._id === searchInput;
      });

      setFormState(...response);

      setSearchedBreed(response);
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
              <p className="h4 text-center mb-4">Find a Breed</p>
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
                {breedsDataID.map((breed) => {
                  return (
                    <option key={breed._id} value={breed._id}>
                      {breed.name}
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

      {searchedBreed.length > 0 && (
        <MDBContainer>
          <MDBRow className="collapseContent">
            <MDBCol md="6">
              <form onSubmit={handleEditFormSubmit}>
                <label className="grey-text">Breed's ID</label>
                <label className="grey-text">Update Breed name</label>
                <input
                  name="name"
                  type="name"
                  id="breed"
                  className="form-control"
                  value={formState.name}
                  onChange={handleChange}
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

                <label className="grey-text">hypoallergenic</label>
                <select
                  className="browser-default custom-select"
                  value={formState.size}
                  onChange={handleChange}
                  type="hypoallergenic"
                  name="hypoallergenic"
                  value={formState.hypoallergenic}
                  multiple={false}
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
                  multiple={false}
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

export default EditBreed;
