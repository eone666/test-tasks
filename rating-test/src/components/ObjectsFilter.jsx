import React from "react";
import { Form } from "react-bootstrap";

const ObjectsFilter = ({ filterData }) => {
  const changeHandler = (e) => {
    filterData(e.target.value);
  };
  return (
    <Form.Control
      className="mb-3"
      onChange={changeHandler}
      placeholder="Type to filter..."
    />
  );
};

export default ObjectsFilter;
