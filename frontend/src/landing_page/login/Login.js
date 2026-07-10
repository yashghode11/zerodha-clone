import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

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
        "https://zerodha-backend-f0kb.onrender.com/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("LOGIN RESPONSE:", data);

      if (data.success) {
        toast.success(data.message);

        setTimeout(() => {
          window.location.replace(
            "https://zerodha-dashboard-y02o.onrender.com"
          );
        }, 1000);
      }
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      toast.error(
        error.response?.data?.message ||
          "Unable to login"
      );
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>

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
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit">Login</button>

        <span>
          Don't have an account?{" "}
          <Link to="/signup">Signup</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;