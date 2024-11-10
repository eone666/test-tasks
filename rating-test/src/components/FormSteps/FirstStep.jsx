import React from "react";
import { Form } from "react-bootstrap";

const FirstStep = ({ errors, touched, statusDict, values }) => (
  <>
    <Form.Group controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" value={values.name} name="name" />
      {errors.name && touched.name ? (
        <Form.Text className="text-danger">{errors.name}</Form.Text>
      ) : null}
    </Form.Group>
    <Form.Group controlId="info">
      <Form.Label>Info</Form.Label>
      <Form.Control type="text" as="textarea" value={values.info} name="info" />
      {errors.info && touched.info ? (
        <Form.Text className="text-danger">{errors.info}</Form.Text>
      ) : null}
    </Form.Group>
    <Form.Group controlId="date">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" name="date" value={values.date} />
      {errors.date && touched.date ? (
        <Form.Text className="text-danger">{errors.date}</Form.Text>
      ) : null}
    </Form.Group>
    <Form.Group controlId="status">
      <Form.Label>Status</Form.Label>
      <Form.Control
        as="select"
        name="status"
        value={values.status ? values.status : null}
        defaultValue="null"
      >
        <option value="null" disabled>
          Не выбрано
        </option>
        {statusDict.map((e, i) => (
          <option key={i} value={e.Name}>
            {e.Name}
          </option>
        ))}
      </Form.Control>
      {errors.status && touched.status ? (
        <Form.Text className="text-danger">{errors.date}</Form.Text>
      ) : null}
    </Form.Group>
  </>
);

export default FirstStep;
