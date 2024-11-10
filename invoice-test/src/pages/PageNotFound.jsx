import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Home</Link>
    </div>
  );
}
