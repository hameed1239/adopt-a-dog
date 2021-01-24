import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import AddBreed from "../AddBreed";
// import DogsListAdmin from "../DogsListAdmin";
import BreedListAdmin from "../BreedListAdmin";
import UserListAdmin from "../UserListAdmin";
import EditBreed from "../EditBreedAdmin";
import EditUser from "../EditUser";
import DeleteUser from "../DeleteUser";
import AddAdoption from "../AddAdoption";
import UpdateAdoption from "../UpdateAdoption";

const Admin = () => {
  const [openAddBreed, setopenAddBreed] = useState(false);
  const [openAddAdoption, setopenAddAdoption] = useState(false);
  const [openEditBreed, setopenEditBreed] = useState(false);
  const [openViewBreed, setopenViewBreed] = useState(false);
  const [openViewUser, setopenViewUser] = useState(false);
  const [openEditUser, setopenEditUser] = useState(false);
  const [openEditAdoption, setopenEditAdoption] = useState(false);
  const [openDeleteUser,setopenDeleteUser] = useState(false);
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

        <h3>DOGS</h3>
        <ul>
          <li>Add a Dog</li>
          <li>Find, Edit & Delete a Dog</li>
          <li>View dogs</li>
        </ul>

        <h3>Adoptions</h3>

        <>
          <Button
            onClick={() => setopenAddAdoption(!openAddAdoption)}
            aria-controls="example-collapse-text"
            aria-expanded={openAddAdoption}
          >
              Add a dog that got adopted.
          </Button>
          <Collapse in={openAddAdoption}>
            <div id="example-collapse-text">
              <AddAdoption />
            </div>
          </Collapse>
          </>
          <>
          <Button
            onClick={() => setopenEditAdoption(!openEditAdoption)}
            aria-controls="example-collapse-text"
            aria-expanded={openEditAdoption}
          >
              Find, Edit & Delete an adoption
          </Button>
          <Collapse in={openEditAdoption}>
            <div id="example-collapse-text">
              <UpdateAdoption />
            </div>
          </Collapse>
          </>
          
          <>
          <Button
            onClick={() => setopenAddAdoption(!openAddAdoption)}
            aria-controls="example-collapse-text"
            aria-expanded={openAddAdoption}
          >
              View all adoptions
          </Button>
          <Collapse in={openViewUser}>
            <div id="example-collapse-text">
              <UserListAdmin />
            </div>
          </Collapse>
          </>


        <h3>USERS</h3>
       
        <>
          <Button
            onClick={() => setopenViewUser(!openViewUser)}
            aria-controls="example-collapse-text"
            aria-expanded={openEditUser}
          >
              View users
          </Button>
          <Collapse in={openViewUser}>
            <div id="example-collapse-text">
              <UserListAdmin />
            </div>
          </Collapse>
        </>
          
          <>
         
          <Button
            onClick={() => setopenEditUser(!openEditUser)}
            aria-controls="example-collapse-text"
            aria-expanded={openEditUser}
          >
              Find & Edit a user
          </Button>
          <Collapse in={openEditUser}>
            <div id="example-collapse-text">
              <EditUser />
            </div>
          </Collapse>
         
          
          </>
          <>
          <Button
            onClick={() => setopenDeleteUser(!openDeleteUser)}
            aria-controls="example-collapse-text"
            aria-expanded={openDeleteUser}
          >
              Delete A User
          </Button>
          <Collapse in={openDeleteUser}>
            <div id="example-collapse-text">
              <DeleteUser />
            </div>
          </Collapse>
        </>
      </section>
    </main>
  );
};

export default Admin;
