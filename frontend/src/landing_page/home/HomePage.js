import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";

import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

function HomePage() {
  const navigate = useNavigate();

  const [cookies, removeCookie] = useCookies(["token"]);

  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      // If token does not exist
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          "https://zerodha-backend-f0kb.onrender.com/",
          {},
          {
            withCredentials: true,
          }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);

          toast.success(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.log("Verification Error:", error);

        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies.token, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <>
      <Hero />

      <Awards />

      <Stats />

      <Pricing />

      <Education />

      <OpenAccount />
    </>
  );
}

export default HomePage;