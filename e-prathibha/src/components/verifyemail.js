import React, { useEffect, useState } from 'react';
import './verifyemail.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmailVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [disotp, setDisotp] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  useEffect(() => {
    let lastname = sessionStorage.getItem("otp");
    console.log(lastname);
    setDisotp(lastname);
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (otp === disotp) {
      let options = { reg_code: otp };

      try {
        const response = await axios.post("https://e-prathibha.com/apis/verifyEmail", options);
        console.log(response);

        if (response.status === 200) {
          alert("Email verification successful.");
          navigate('/login');
        } else {
          alert("Email verification failed.");
        }
      } catch (error) {
        console.error("Error during email verification:", error);
        alert("Error occurred during email verification");
      }

    } else {
      alert("OTP does not match. Please check your OTP.");
    }
  };

  return (
    <div className='email-verification-container'>
      <h2>Email Verification</h2>
      <p>Enter the OTP sent to your email.</p>
      <input
        type="text"
        value={otp}
        onChange={handleOtpChange}
        placeholder="Enter Below OTP"
        required
      />
      <button onClick={handleVerify}>Verify</button> <br/><br/>
      
      <p>Your OTP: {disotp}</p>
    </div>
  );
}

export default EmailVerification;
