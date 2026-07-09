import React from "react";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh", width: "100%" }}
    >
      <Link to="/" className="btn btn-primary">
        Get started
      </Link>
    </div>
  );
};

export default Apps;