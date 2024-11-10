import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function Logout() {
  const { setUser } = useAuth();
  useEffect(() => {
    setUser(null);
  });
  return <Redirect to="/login"></Redirect>;
}
