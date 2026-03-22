import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [show, setShow] = useState(false); // 👁️ show/hide password
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/register", data);
      alert("Registered Successfully ✅");

      // 👉 Redirect to login page
      navigate("/");
    } catch (err) {
      alert("Error in registration ❌");
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>

      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      {/* 🔐 Password with show/hide */}
      <div className="password-box">
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <span onClick={() => setShow(!show)}>
          {show ? "🙈" : "👁️"}
        </span>
      </div>

      <button onClick={handleSubmit}>Register</button>

      <p onClick={() => navigate("/")}>
        Already have an account? Login
      </p>
    </div>
  );
}