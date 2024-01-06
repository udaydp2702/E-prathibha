// reducers.js
const initialState = {
    isVerificationSuccess: true,
  };
  
  const emailVerificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'VERIFY_EMAIL_SUCCESS':
        return { ...state, isVerificationSuccess: true };
      case 'VERIFY_EMAIL_FAILURE':
        return { ...state, isVerificationSuccess: false }; // Corrected value to false
      default:
        return state;
    }
  };
  
  export default emailVerificationReducer;
  