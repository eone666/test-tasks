import React from "react";
import { Alert, Button } from "react-bootstrap";

const FinalStep = ({ errors, fetchError }) => {
  return (
    <>
      {Object.values(errors).map((e, i) => (
        <Alert key={i} variant="danger">
          {e}
        </Alert>
      ))}
      {fetchError ? <Alert variant="danger">{fetchError}</Alert> : null}
      <Button type="submit">Submit</Button>
    </>
  );
};

export default FinalStep;
