import { LOAD_USER_DATA } from "./actions-types";


const initialState = {
  userData: {},
};

console.log('USER DATA REDUCER --------------->', initialState.userData)


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
