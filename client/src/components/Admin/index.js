import React from 'react';

const Admin = () => {
  return (
    <main id='admin'>
      <section className='container'>
        <h1>Admin Data Management</h1>
      </section>

      <section className='container mt-20'>
        <h3>BREEDS</h3>
        <ul>
          <li>Add a Breed</li>
          <li>Find, Edit and/or Delete a Breed</li>
          <li>View breeds</li>
        </ul>

        <h3>DOGS</h3>
        <ul>
          <li>Add a Dog</li>
          <li>Find, Edit & Delete a Dog</li>
          <li>View dogs</li>
        </ul>

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
