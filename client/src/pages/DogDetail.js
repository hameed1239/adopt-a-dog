import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DogDetail = () => {
  const { id } = useParams();

  return (
    <main id='dog'>
      <section class='container'>
        <h1>Rottweiler 7</h1>
        <h2>
          Color: <span class='black-font'>Black</span> | Age:
          <span class='black-font'>6 Months</span>
        </h2>
      </section>

      <section class='container mt-20'>
        <img
          class='br-20 mb-20'
          src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
          width='100%'
          alt=''
        />

        <button>Suggested Donation: $150</button>

        <h3 class='mt-20'>Description</h3>
        <p>
          <span>SALES PITCH!</span> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. At quisquam, quas, fugiat quam hic id repellendus
          animi temporibus saepe nam vel obcaecati! Illum, eum magni alias nulla
          suscipit amet consectetur voluptate eveniet perspiciatis, nisi
          consequatur id molestias quasi, odio doloremque quisquam sapiente
          maiores? Similique accusamus molestiae voluptates facere dolor
          incidunt ex libero quos minus id, iure eum explicabo suscipit sit
          molestias cupiditate quam maxime laboriosam maiores ad, corporis
          voluptas! Soluta quasi, non ad, labore nulla animi ipsa illum repellat
          eum aliquid vero numquam aut ratione laborum! Quam ipsam dolorum,
          exercitationem corporis, modi similique aut provident corrupti quos
          perferendis tenetur maxime!
        </p>
      </section>
    </main>
  );
};

export default DogDetail;
