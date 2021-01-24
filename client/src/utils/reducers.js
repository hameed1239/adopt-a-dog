import {
  UPDATE_DOGS,
  UPDATE_BREEDS,
  UPDATE_CURRENT_BREED,
  ADD_BREED,
  UPDATE_A_USER,
  DELETE_A_USER,
  ADD_ADOPTION,
  UPDATE_ADOPTION
} from "./actions";

const defaultState = {
  dogs: [],
  breeds: [],
  temperaments: [],
  users: [],
  adoptions: []
};

const reducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    //if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array
    case UPDATE_DOGS:
      return {
        ...state,
        dogs: [...action.dogs],
      };

    case UPDATE_BREEDS:
      return {
        ...state,
        breeds: [...action.breeds],
      };

    case UPDATE_CURRENT_BREED:
      return {
        ...state,
        currentBreed: action.currentBreed,
      };

    case ADD_BREED:
      return {
        ...state,
        breeds: [...action.breeds],
      };
      case ADD_ADOPTION:
        return {
          ...state,
          adoptions: [...action.adoptions],
        };
  
    case UPDATE_A_USER:
      
      return {
        ...state,
        users: [...action.users],
      };
    case UPDATE_ADOPTION:
      
        return {
          ...state,
          adoptions: [...action.adoptions],
        };
      
    case DELETE_A_USER:
      let newState = state.users.filter(user => {
        return user._id !== action._id;
      });

      return {
       ...state,
        newState
      };
    
    default:
      return state;
  }
};

export default reducer;
