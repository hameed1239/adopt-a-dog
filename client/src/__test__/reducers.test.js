// reducer tests
import { UPDATE_DOGS } from '../utils/actions';

import reducer from '../utils/reducers';

const initialState = {
  dogs: [],
};

test('UPDATE_DOGS', () => {
  let newState = reducer(initialState, {
    type: UPDATE_DOGS,
    dogs: [{}, {}, {}],
  });

  expect(newState.dogs.length).toBe(3);
  expect(initialState.dogs.length).toBe(0);
});
