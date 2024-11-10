import React from "react";
import { Table, Alert } from "react-bootstrap";
import moment from "moment";

const ObjectsList = ({ data }) => {
  if (!data) return <Alert variant="primary">Noting found</Alert>;
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Object ID</th>
          <th>Name</th>
          <th>Info</th>
          <th>Status</th>
          <th>Date</th>
          <th>Remark</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, i) => (
          <tr key={i}>
            <td>{e.ObjId}</td>
            <td>{e.Name}</td>
            <td>{e.Info}</td>
            <td>{e.StatusName}</td>
            <td>{moment(e.Date).toDate().toString()}</td>
            <td>{e.IsRemark ? "+" : "-"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ObjectsList;
