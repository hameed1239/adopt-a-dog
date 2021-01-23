import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { QUERY_BREEDS } from "../../utils/queries";
import { UPDATE_A_BREED } from "../../utils/mutations";
import { UPDATE_BREEDS } from "../../utils/actions";

import { useDispatch, useSelector } from "react-redux";

import { Container, Col, Form, Button } from "react-bootstrap";

const EditBreed = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { breeds } = state;

  const { loading, data: breedsData } = useQuery(QUERY_BREEDS);

  const [searchInput, setSearchInput] = useState("");
  const [searchedBreed, setSearchedBreed] = useState([]);

  const [formState, setFormState] = useState({
    name: "",
    size: "",
    hypoallergenic: false,
    colors: "",
    temperaments: "",
  });

  const [updateBreed] = useMutation(UPDATE_A_BREED);

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

      if (mutationResponse) {
        alert("You have successfully Update a Breed");
      }
    } catch (e) {
      console.error(e);
      setFormState({
        _id: "",
        name: "",
        size: "",
        hypoallergenic: true,
      });
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

      setSearchedBreed(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h1>Search for Breed!</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Row>
          <Col xs={12} md={8}>
            <Form.Control
              name="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              size="lg"
              placeholder="Search for a Breed"
            />
          </Col>
          <Col xs={12} md={4}>
            <Button type="submit" variant="success" size="lg">
              Find Breed
            </Button>

            {/* <Button type="" variant="danger" size="lg">
              Delete
            </Button> */}
          </Col>
        </Form.Row>
      </Form>
      {searchedBreed.length > 0 && (
        <Form onSubmit={handleEditFormSubmit}>
          <Form.Row>
            <Col xs={12} md={8}>
              ID:
              <Form.Control
                name="_id"
                value={formState._id}
                onChange={handleChange}
                type="text"
                size="lg"
                required="required"
              />
            </Col>

            <Col xs={12} md={8}>
              Name:
              <Form.Control
                name="name"
                value={formState.name}
                onChange={handleChange}
                type="text"
                size="lg"
                required="required"
              />
            </Col>

            <Col xs={12} md={8}>
              Size:
              <Form.Control
                name="size"
                value={formState.size}
                onChange={handleChange}
                type="text"
                size="lg"
                required="required"
              />
            </Col>

            <Col xs={12} md={8}>
              Color ID:
              <Form.Control
                name="colors"
                value={formState.colors}
                onChange={handleChange}
                type="text"
                size="lg"
                required="required"
              />
            </Col>

            <Col xs={12} md={8}>
              Temperament ID:
              <Form.Control
                name="temperaments"
                value={formState.temperaments}
                onChange={handleChange}
                type="text"
                size="lg"
                required="required"
              />
            </Col>
          </Form.Row>

          <Col xs={12} md={4}>
            <Button type="submit" variant="success" size="lg">
              Update Breed
            </Button>
          </Col>
        </Form>
      )}
      {/* <section className="container mt-20"> */}

      {/* </section> */}
    </Container>
  );
};

export default EditBreed;
