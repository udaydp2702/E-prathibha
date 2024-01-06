const initialState = {
    isLoginSuccess: false,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isLoginSuccess: true };
      case 'LOGIN_FAILURE':
        return { ...state, isLoginSuccess: false };
      default:
        return state;
    }
  };
  
  export default loginReducer;