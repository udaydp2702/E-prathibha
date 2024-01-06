// reducers.js
const initialState = {
    registrationSuccess: false,
    registrationFailure: false,
  };
  
  const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_SUCCESS":
        return { ...state, registrationSuccess: true, registrationFailure: false };
      case "REGISTER_FAILURE":
        return { ...state, registrationSuccess: false, registrationFailure: true };
      default:
        return state;
    }
  };
  
  export default registrationReducer;
  

