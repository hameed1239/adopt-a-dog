import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_BREED } from "../../utils/mutations";

const AddBreed = () => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    hypoallergenic: false,
    colors: "",
    temperaments: "",
  });

  const [addBreed, { error }] = useMutation(ADD_BREED);

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
      const mutationResponse = await addBreed({
        variables: {
          name: formState.name,
          size: formState.size,
          hypoallergenic: formState.hypoallergenic,
          colors: formState.colors,
          temperaments: formState.temperaments,
        },
      });

      if (mutationResponse) {
        alert("You have successfully Added a New Breed Type");
      }
    } catch (e) {
      console.error(e);
      setFormState({
        name: "",
        size: "",
        hypoallergenic: true,
        colors: "",
        temperaments: "",
      });
    }
  };

  return (
    <div id="example-collapse-text">
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Your name"
          name="name"
          type="name"
          required="required"
          id="breadname"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Size"
          name="size"
          type="size"
          required="required"
          id="size"
          value={formState.size}
          onChange={handleChange}
        />
        {/* <input
                  className="form-input"
                  placeholder="hypoallergenic"
                  name="hypoallergenic"
                  type="checkbox"
                  id="hypoallergenic"
                  value={formState.hypoallergenic}
                  onChange={handleChange}
                /> */}
        <input
          className="form-input"
          placeholder="colors"
          name="colors"
          type="colors"
          required="required"
          id="colors"
          value={formState.colors}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="temperaments"
          name="temperaments"
          type="temperaments"
          required="required"
          id="temperaments"
          value={formState.temperaments}
          onChange={handleChange}
        />
        <button className="btn d-block w-100" type="submit">
          Submit
        </button>
        {error && <div>Failed to Add a Breed, Please try again</div>}
      </form>
    </div>
  );
};

export default AddBreed;
