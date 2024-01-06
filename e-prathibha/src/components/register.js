import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  let { name, email, password, confirmPassword, phone } = data;   //destructing

  let changingg = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let submitting = async (e) => {
    e.preventDefault();

    let options = { name, email, password, confirmPassword, phone };
    await axios
      .post("https://e-prathibha.com/apis/register", options)
      .then((val) => {
        console.log(val);

        let otpsplit = val.data.data;

        console.log(otpsplit);

        let b = otpsplit.slice(-6);

        let otp = sessionStorage.setItem("otp", b);
        console.log(otp);
        console.log(b);
      });

    if (name.match(/^[a-z]/) && name.includes("@gmail.com")) {
      alert("user name starts with capital letter");
    } else if (password.length <= 8) {
      alert("Password length must be greater than 8");
    } else if (password !== confirmPassword) {
      alert("Password is not matching");
    } else if (phone.length !== 10) {
      alert("PhoneNumber should be 10 digits");
    } else {
      console.log(data);

      navigate("/verifyemail");
      alert("user registered successfulluy");
    }
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      Phone: "",
    });
  };

  return (
    <div className="card-container">
      <center>
        <form onSubmit={submitting}>
          <h1 style={{ fontSize: "xx-large" }} className="reg">
            Register Form
          </h1>
          <div className="hi">
            <label>
              Username <sup>*</sup>
            </label>
            <br />
            <input type="text" name="name" value={name} onChange={changingg} />
            <br />

            <label>
              Email<sup>*</sup>
            </label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={changingg}
            />
            <br />

            <label>
              Password<sup>*</sup>
            </label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={changingg}
            />
            <br />

            <label>
              ConfirmPassword<sup>*</sup>
            </label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={changingg}
            />
            <br />

            <label>PhoneNumber</label>
            <br></br>
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={changingg}
            />
            <br></br>

            <input
              type="submit"
              value="Register"
              class="reg1"
              style={{
                backgroundColor: "orange",
                marginTop: 15,
                fontSize: "x-large",
              }}
              className="reg"
            />
            <br></br>

            <label> Already have an Account: </label>
            <Link className="Link" to="/login">
              Login
            </Link>
          </div>
        </form>
      </center>
    </div>
  );
}

export default Register;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { registrationSuccess, registrationFailure } from "./redux/reducers"
// import "./register.css";
// import { registerUser } from "./redux/actions";

// function Register() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phone: "",
//   });

//   const { name, email, password, confirmPassword, phone } = data;
//   const { registrationSuccess, registrationFailure } = useSelector(
//     (state) => state
//   );

//   const changingg = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const submitting = async (e) => {
//     e.preventDefault();

//     try {
//       await dispatch(
//         registerUser({
//           name,
//           email,
//           password,
//           confirmPassword,
//           phone,
//         })
//       );

//       if (name.match(/^[a-z]/) && name.includes("@gmail.com")) {
//         alert("User name starts with a capital letter");
//       } else if (password.length <= 8) {
//         alert("Password length must be greater than 8");
//       } else if (password !== confirmPassword) {
//         alert("Password is not matching");
//       } else if (phone.length !== 10) {
//         alert("PhoneNumber should be 10 digits");
//       } else {
//         console.log(data);
//         navigate("/verifyemail");
//         alert("User registered successfully");
//       }
//       setData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         phone: "",
//       });
//     } catch (error) {
//       console.error("Registration failed:", error);
//     }
//   };

//   return (
//     <div className="card-container">
//       <center>
//         <form onSubmit={submitting}>
//           <h1 style={{ fontSize: "xx-large" }} className="reg">
//             Register Form
//           </h1>
//           <div className="hi">
//             <label>Username</label>
//             <br />
//             <input type="text" name="name" value={name} onChange={changingg} />
//             <br />

//             <label>Email</label>
//             <br />
//             <input type="email" name="email" value={email} onChange={changingg} />
//             <br />

//             <label>Password</label>
//             <br />
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={changingg}
//             />
//             <br />

//             <label>Confirm Password</label>
//             <br />
//             <input
//               type="password"
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={changingg}
//             />
//             <br />

//             <label>PhoneNumber</label>
//             <br />
//             <input type="number" name="phone" value={phone} onChange={changingg} />
//             <br />

//             <input
//               type="submit"
//               value="Register"
//               className="reg1"
//               style={{
//                 backgroundColor: "orange",
//                 marginTop: 15,
//                 fontSize: "x-large",
//               }}
//             />
//             <br />

//             <label> Already have an Account: </label>
//             <Link className="Link" to="/login">
//               Login
//             </Link>
//           </div>
//         </form>
//       </center>
//     </div>
//   );
// }

// export default Register;
