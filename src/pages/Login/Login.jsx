import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useAddUserMutation,
  useDeleteUserMutation,
  useUsersQuery,
} from "../../services/UsersApi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { logIn, getUser } from "../../redux/usersSlice";

function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { data } = useUsersQuery();
  // const [deleteUser]=useDeleteUserMutation()

  const HandleSubmitLogin = (e) => {
    e.preventDefault();
    const check = data.some(
      (item) => item.email === email && item.password === password
    );
    if (check) {
      alert("Sayitimizga hush kelibsiz ");
      dispatch(logIn());
      dispatch(getUser(check));
      localStorage.setItem("check", JSON.stringify(check));
      navigate("/");
    } else {
      alert("email yoki parol xato");
    }
  };
  

  const showToggleBtn = () => {
    setShow(!show);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="" onSubmit={HandleSubmitLogin}>
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
        <h1 className="eye" onClick={showToggleBtn}>
          {show ? <FaEyeSlash /> : <FaEye />}
        </h1>
        <button type="submit">Login</button>
        <h2 className="logh1">
          Agar ro'yxatdan o'tmagan bo'lsangiz
          <span onClick={() => navigate("/register")}> Register</span>
        </h2>
      </form>
    </div>
  );
}

export default Login;
