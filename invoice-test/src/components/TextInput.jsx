import React from "react";
import { Field } from "formik";

export default function TextInput({ ...rest }) {
  return <Field className="input" {...rest} />;
}
