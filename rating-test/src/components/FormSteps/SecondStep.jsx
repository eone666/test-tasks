import React from "react";
import { Form } from "react-bootstrap";

const FirstStep = ({ errors, touched, values }) => (
  <>
    <Form.Group controlId="remarkCategory">
      <Form.Label>Remark category</Form.Label>
      <Form.Control
        type="text"
        name="remarkCategory"
        value={values.remarkCategory}
      />
      {errors.remarkCategory && touched.remarkCategory ? (
        <Form.Text className="text-danger">{errors.remarkCategory}</Form.Text>
      ) : null}
    </Form.Group>
    <Form.Group controlId="remarkDate">
      <Form.Label>Remark date</Form.Label>
      <Form.Control type="date" name="remarkDate" value={values.remarkDate} />
      {errors.remarkDate && touched.remarkDate ? (
        <Form.Text className="text-danger">{errors.remarkDate}</Form.Text>
      ) : null}
    </Form.Group>
    <Form.Group controlId="remarkInfo">
      <Form.Label>Remark info</Form.Label>
      <Form.Control
        type="text"
        as="textarea"
        name="remarkInfo"
        value={values.remarkInfo}
      />
      {errors.remarkInfo && touched.remarkInfo ? (
        <Form.Text className="text-danger">{errors.remarkInfo}</Form.Text>
      ) : null}
    </Form.Group>
  </>
);

export default FirstStep;
