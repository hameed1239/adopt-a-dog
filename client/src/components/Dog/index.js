import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Dog = (dog) => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { image, name, _id } = dog;

  return (
    <>
      <article>
        <Link to={`/dogs/${_id}`}>
          <img src={`${image}`} alt="pet img" style={{ width: "100%" }} />
        </Link>
        <h4>{name}</h4>
      </article>
    </>
  );
};
export default Dog;
