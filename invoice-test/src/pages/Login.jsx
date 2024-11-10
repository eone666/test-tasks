import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setError] = useState(false);
  const { setUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (values) => {
    const response = await fetch(
      `https://api.github.com/users/${values.login}`
    );
    const data = await response.json();
    if (response.status === 200) {
      const user = {
        login: values.login,
        password: values.password,
        avatarUrl: data.avatar_url,
      };
      setUser(user);
      setLoggedIn(true);
    } else {
      setError(true);
      setErrorMessage(data.message);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="page login">
      <h1>Login</h1>
      <LoginForm
        submitHandler={submitHandler}
        isError={isError}
        errorMessage={errorMessage}
      ></LoginForm>
    </div>
  );
}
