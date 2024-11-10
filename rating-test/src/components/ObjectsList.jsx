import React from "react";
import { Link } from "react-router-dom";
import { Table, Alert } from "react-bootstrap";

const ObjectsList = ({ data }) => {
  if (!data) return <Alert variant="primary">Noting found</Alert>;
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Reports</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, i) => (
          <tr key={i}>
            <td>{e.Id}</td>
            <td>{e.Name}</td>
            <td>
              <Link to={`/reports/${e.Id}`}>Open</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ObjectsList;
