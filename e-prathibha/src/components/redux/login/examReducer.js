
// reducers.js
const initialState = {
    exams: [],
    isLoading: false,
    error: null,
  };
  
  const examsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EXAMS_SUCCESS':
        return {
          ...state,
          exams: action.payload.data.exams,
          isLoading: false,
          error: null,
        };
      case 'FETCH_EXAMS_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default examsReducer;
  
  

  