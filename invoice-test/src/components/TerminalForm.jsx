import React from "react";
import { Formik, Form } from "formik";
import TextInput from "./TextInput";
import Button from "./Button";
import * as Yup from "yup";

const terminalSchema = Yup.object().shape({
  name: Yup.string().required("Name required"),
  description: Yup.string(),
});

export default function TerminalForm({ submitHandler }) {
  return (
    <div className="terminal-form">
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={submitHandler}
        validationSchema={terminalSchema}
      >
        {({ errors, isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="terminal-form__row">
              <TextInput name="name" placeholder="Name" />
            </div>
            <div className="terminal-form__row">
              <TextInput name="description" placeholder="Description" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Add
            </Button>
            <div className="terminal-form__row errors">
              {errors.name ? (
                <div className="errors__item">{errors.name}</div>
              ) : (
                <div className="errors__item"></div>
              )}
              {errors.description ? (
                <div className="errors__item">{errors.description}</div>
              ) : (
                <div className="errors__item"></div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
