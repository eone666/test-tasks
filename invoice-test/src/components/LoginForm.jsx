import React from "react";
import { Formik, Form } from "formik";
import Button from "./Button";
import TextInput from "./TextInput";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  login: Yup.string().required("Login required"),
  password: Yup.string()
    .min(8, "Password must be more than 8 characters")
    .matches(
      /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/gm,
      "Password must at least 1 lowercase letter, 1 uppercase letter, and 1 digit."
    )
    .required("Password equired"),
});

export default function LoginForm({ isError, errorMessage, submitHandler }) {
  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={submitHandler}
    >
      {({ errors, isSubmitting, handleSubmit }) => (
        <Form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__row">
            <TextInput name="login" placeholder="login" />
          </div>
          <div className="login-form__row">
            <TextInput name="password" type="password" placeholder="password" />
          </div>
          <div className="login-form__row">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </div>
          <div className="login-form__row errors">
            {errors.login ? (
              <div className="errors__item">{errors.login}</div>
            ) : (
              <div className="errors__item"></div>
            )}
            {errors.password ? (
              <div className="errors__item">{errors.password}</div>
            ) : (
              <div className="errors__item"></div>
            )}
            {isError ? (
              <div className="errors__item">{errorMessage}</div>
            ) : (
              <div className="errors__item"></div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}
