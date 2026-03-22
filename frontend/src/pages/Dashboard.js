import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    axios.get("http://localhost:5000/profile", {
      headers: { Authorization: token }
    })
    .then(res => setUser(res.data))
    .catch(() => navigate("/"));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="welcome">Welcome {user?.name} 👋</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}