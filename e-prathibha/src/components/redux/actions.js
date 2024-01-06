// actions.js
import axios from "axios";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://test.e-prathibha.com/apis/register",
      userData
    );

    const otpsplit = response.data.data;
    const otp = otpsplit.slice(-6);
    sessionStorage.setItem("otp", otp);

    dispatch({
      type: "REGISTER_SUCCESS",
    });

    return otp;
  } catch (error) {
    console.error("Error during registration:", error);

    dispatch({
      type: "REGISTER_FAILURE",
    });

    throw error;
  }
};
// actions.js
export const verifyEmail = (otp) => async (dispatch) => {
    try {
      const options = { reg_code: otp };
      const response = await axios.post("https://test.e-prathibha.com/apis/verifyEmail", options);
  
      console.log('Response:', response);
  
      if (response.status === 200) {
        dispatch({
          type: 'VERIFY_EMAIL_SUCCESS',
        });
      } else {
        dispatch({
          type: 'VERIFY_EMAIL_FAILURE',
        });
      }
    } catch (error) {
      console.error('Error during email verification:', error);
      dispatch({
        type: 'VERIFY_EMAIL_FAILURE',
      });
    }
  };



  
// actions.js

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://test.e-prathibha.com/apis/login",
      userData
    );

    const { data } = response;

    if (data.status === 200) {
      const { Token, Id } = data.data;
      const ServerKey = "3w99V63pW7tJ7vavGXtCKo8cp";

      sessionStorage.setItem("server_key", ServerKey);
      sessionStorage.setItem("tokenu", Token);
      sessionStorage.setItem("id", Id);

      dispatch({
        type: 'LOGIN_SUCCESS',
      });
    } else {
      dispatch({
        type: 'LOGIN_FAILURE',
      });
    }
  } catch (error) {
    console.error('Error during login:', error);
    dispatch({
      type: 'LOGIN_FAILURE',
    });
  }
};


export const fetchExams = (id, serverKey, tokenu) => async (dispatch) => {
  try {
    const apiUrl = 'https://test.e-prathibha.com/apis/test_free_exam';
    const headers = {
      'id': id,
      'server_key': serverKey,
      'tokenu': tokenu
    };

    const response = await axios.post(apiUrl, {}, { headers });

    dispatch({
      type: 'FETCH_EXAMS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_EXAMS_FAILURE',
      payload: error,
    });
  }
};
