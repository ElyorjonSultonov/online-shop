import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useAddUserMutation, useUsersQuery } from "../../services/UsersApi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Register() {
  const [show, setShow] = useState(false);
  const { data } = useUsersQuery();
  const [addTask] = useAddUserMutation();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(data)
  const HandleSubmitRegister = (e) => {
    e.preventDefault();
    let check = data.some((item) => item.email === email);
    if (check) {
      alert("bunday email bor");
    } else {
      const newUser = { text, email, password };
      addTask(newUser);
      navigate("/login");
    }
  };
  const showToggle = () => {
    setShow(!show);
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form action="" onSubmit={HandleSubmitRegister}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="ismingiz"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="emailingiz"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type={show ? "text" : "password"}
          placeholder="parolingiz"
        />

        <h1 className="eye" onClick={showToggle}>
          {show ? <FaEyeSlash /> : <FaEye />}
        </h1>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
