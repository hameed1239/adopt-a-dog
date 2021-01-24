import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import AddBreed from "../AddBreed";
import AddDog from "../AddDog";
import EditDog from "../EditDogAdmin";
import DogsListAdmin from "../DogsListAdmin";
import BreedListAdmin from "../BreedListAdmin";
import EditBreed from "../EditBreedAdmin";

const Admin = () => {
  const [openAddBreed, setopenAddBreed] = useState(false);
  const [openEditBreed, setopenEditBreed] = useState(false);
  const [openViewBreed, setopenViewBreed] = useState(false);

  const [openAddDog, setopenAddDog] = useState(false);
  const [openEditDog, setopenEditDog] = useState(false);
  const [openViewDog, setopenViewDog] = useState(false);

  return (
    <main id="admin">
      <section className="container">
        <h1>Admin Data Management</h1>
      </section>

      <section className="container mt-20 container-flex-col">
        <h3>BREEDS</h3>

        <>
          <Button
            onClick={() => setopenAddBreed(!openAddBreed)}
            aria-controls="example-collapse-text"
            aria-expanded={openAddBreed}
          >
            Add A Breed
          </Button>
          <Collapse in={openAddBreed}>
            <div>
              <AddBreed />
            </div>
          </Collapse>
        </>

        <>
          <Button
            onClick={() => setopenEditBreed(!openEditBreed)}
            aria-controls="example-collapse-text"
            aria-expanded={openEditBreed}
          >
            Find/Edit/Remove Breed
          </Button>
          <Collapse in={openEditBreed}>
            <div id="example-collapse-text">
              <EditBreed />
            </div>
          </Collapse>
        </>

        <>
          <Button
            onClick={() => setopenViewBreed(!openViewBreed)}
            aria-controls="example-collapse-text"
            aria-expanded={openViewBreed}
          >
            View Breed
          </Button>
          <Collapse in={openViewBreed}>
            <div id="example-collapse-text">
              View Breeds
              <BreedListAdmin />
            </div>
          </Collapse>
        </>

        <>
          <h3>Dogs</h3>
          <Button
            onClick={() => setopenAddDog(!openAddDog)}
            aria-controls="example-collapse-text"
            aria-expanded={openAddDog}
          >
            Add A Dog
          </Button>
          <Collapse in={openAddDog}>
            <div>
              <AddDog />
            </div>
          </Collapse>
        </>

        <>
          <Button
            onClick={() => setopenEditDog(!openEditDog)}
            aria-controls="example-collapse-text"
            aria-expanded={openEditDog}
          >
            Find/Edit/Remove Dog
          </Button>
          <Collapse in={openEditDog}>
            <div id="example-collapse-text">
              <EditDog />
            </div>
          </Collapse>
        </>

        <>
          <Button
            onClick={() => setopenViewDog(!openViewDog)}
            aria-controls="example-collapse-text"
            aria-expanded={openViewDog}
          >
            View Dogs
          </Button>
          <Collapse in={openViewDog}>
            <div id="example-collapse-text">
              <DogsListAdmin />
            </div>
          </Collapse>
        </>

        {/* <h3>DOGS</h3>
        <ul>
          <li>Add a Dog</li>
          <li>Find, Edit & Delete a Dog</li>
          <li>View dogs</li>
        </ul> */}

        <h3>ORDERS</h3>
        <ul>
          <li>Add an order</li>
          <li>Find, Edit & Delete an order</li>
          <li>View orders</li>
        </ul>

        <h3>USERS</h3>
        <ul>
          <li>Add a user</li>
          <li>Find, Edit & Delete a user</li>
          <li>View users</li>
        </ul>
      </section>
    </main>
  );
};

export default Admin;
