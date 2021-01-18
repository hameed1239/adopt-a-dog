import { UPDATE_DOGS } from './actions';

const defaultState = {
  dogs: [],
  breeds: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    //if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array
    case UPDATE_DOGS:
      return {
        ...state,
        dogs: [...action.dogs],
      };

    default:
      return state;
  }
};

export default reducer;
