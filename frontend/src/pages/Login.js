import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false); // 👈 new state
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", data);
      localStorage.setItem("token", res.data.token);
      alert("Login Success 🔥");
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={e => setData({ ...data, email: e.target.value })}
      />

      {/* 👇 PASSWORD FIELD */}
      <div className="password-box">
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          onChange={e => setData({ ...data, password: e.target.value })}
        />

        <span onClick={() => setShow(!show)}>
          {show ? "🙈" : "👁️"}
        </span>
      </div>

      <button onClick={handleLogin}>Login</button>

      <p onClick={() => navigate("/register")}>New user? Register</p>
    </div>
  );
}