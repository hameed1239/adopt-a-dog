import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Dog from '../Dog';

import { UPDATE_DOGS } from '../../utils/actions';
import { useDispatch, useSelector } from 'react-redux';

const DogsList = () => {
  const state = useSelector((state) => {
    return state;
  });

  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UPDATE_DOGS,
      dogs: [
        {
          id: '1',
          name: 'bulldog',
          description: 'kid-friendly',
          size: 'large',
          image: 'https://images.dog.ceo/breeds/rottweiler/n02106550_8887.jpg',
        },
      ],
    });
  }, [dispatch]);

  // console.log(state.dogs[0].name);

  return (
    <main id='breeds' className='main'>
      <div className='container'>
        <h1>Select a Breed</h1>
      </div>

      <div className='container flex-container'>
        <label className='label' htmlFor='size'>
          Size
        </label>
        <select name='size' id='size' className='hidden'>
          <option value='large'>Large</option>
          <option value='Medium'>Medium</option>
          <option value='Small'>Small</option>
        </select>

        <input
          className='hidden'
          type='checkbox'
          id='kid-friendly'
          name='kid-friendly'
          value='false'
        />
        <label className='label' htmlFor='kid-friendly'>
          Kid-Friendly
        </label>
      </div>

      <div className='container mt-20'>
        <h3>Large Breeds</h3>
        <div className='flex-container'>
          {/* {state.dogs.map((dog) => dog.description)} */}
          <Dog />
        </div>
      </div>

      <div className='container mt-20'>
        <h3>Medium Breeds</h3>
        <div className='flex-container'>
          <Dog />
        </div>
      </div>

      <div className='container mt-20'>
        <h3>Small Breeds</h3>
        <div className='flex-container'>
          <Dog />
        </div>
      </div>
    </main>
  );
};
export default DogsList;
