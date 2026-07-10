import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://zerodha-backend-f0kb.onrender.com/auth/signup",
        {
          email,
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("SIGNUP RESPONSE:", data);

      if (data.success) {
        toast.success(data.message);

        setInputValue({
          email: "",
          username: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      console.error("SIGNUP ERROR:", error);

      toast.error(
        error.response?.data?.message ||
          "Unable to connect to the server"
      );
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="username">Username</label>

          <input
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            autoComplete="username"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            autoComplete="new-password"
            required
          />
        </div>

        <button type="submit">Signup</button>

        <span>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;