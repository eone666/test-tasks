import React from "react";
import Button from "./Button";

export default function TerminalTable({ data, deleteHandler }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.description}</td>
              <td>
                <Button
                  onClick={() => {
                    deleteHandler(e.id);
                  }}
                  style={{ width: "auto" }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
