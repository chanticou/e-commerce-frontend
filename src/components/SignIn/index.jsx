// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { SignInUser } from "../../redux/actions/index";
// import { useNavigate } from "react-router-dom";
// import "./index.css";

// export const SignIn = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//     userName: "",
//   });
//   const [error, setError] = useState(false);

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!input.email || !input.password) {
//       setError(true);
//     } else {
//       setInput({
//         email: "",
//         password: "",
//         userName: "",
//       });
//       dispatch(SignInUser(input));
//       setError(true);

//       navigate("/");
//     }
//   };

//   return (
//     <>
//       <Form className="form-loguin" onSubmit={(e) => handleSubmit(e)}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           {/* <Form.Label>Search product...</Form.Label> */}
//           <Form.Control
//             onChange={(e) => handleChange(e)}
//             type="userName"
//             placeholder="User name..."
//             name="userName"
//             value={input.userName}
//           />
//           <Form.Control
//             onChange={(e) => handleChange(e)}
//             type="email"
//             placeholder="Email..."
//             name="email"
//             value={input.email}
//           />
//           <Form.Control
//             onChange={(e) => handleChange(e)}
//             type="password"
//             placeholder="Password..."
//             name="password"
//             value={input.password}
//           />
//         </Form.Group>
//         <input type="submit" />
//       </Form>
//     </>
//   );
// };
