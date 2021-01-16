import React from 'react';

const Home = () => {
  return (
    <div id='breeds' className='main' style={{ minHeight: '82.5vh' }}>
      <div className='container'>
        <h1>Select a Breed</h1>
      </div>

      <div className='container flex-container'>
        <label className='label' for='size'>
          Size
        </label>
        <select name='size' id='size' class='hidden'>
          <option value='large'>Large</option>
          <option value='Medium'>Medium</option>
          <option value='Small'>Small</option>
        </select>

        <input
          class='hidden'
          type='checkbox'
          id='kid-friendly'
          name='kid-friendly'
          value='false'
        />
        <label className='label' for='kid-friendly'>
          Kid-Friendly
        </label>
      </div>

      <div className='container mt-20'>
        <h3>Large Breeds</h3>
        <div className='flex-container'>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
        </div>
      </div>

      <div className='container mt-20'>
        <h3>Medium Breeds</h3>
        <div className='flex-container'>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
        </div>
      </div>

      <div className='container mt-20'>
        <h3>Small Breeds</h3>
        <div className='flex-container'>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
          <article>
            <img
              src='https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg'
              alt='pet img'
              style={{ width: '100%' }}
            />
            <h4>Australian Shepherd</h4>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
