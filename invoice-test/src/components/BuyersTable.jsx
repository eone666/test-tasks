import React from "react";
import { Link } from "react-router-dom";

export default function BuyersTable({ data, sortBy }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>
              Average check{" "}
              <button
                className="sort"
                onClick={() => {
                  sortBy("averageCheck");
                }}
              >
                <i className="fas fa-sort"></i>
              </button>
            </th>
            <th>
              Number of purchases{" "}
              <button
                onClick={() => {
                  sortBy("numberOfPurchases");
                }}
              >
                <i className="fas fa-sort"></i>
              </button>
            </th>
            <th>
              Total revenues{" "}
              <button
                onClick={() => {
                  sortBy("totalRevenues");
                }}
              >
                <i className="fas fa-sort"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>
                <Link to={`/buyers/${e.id}`}>{e.id}</Link>
              </td>
              <td>{e.name}</td>
              <td>{e.averageCheck}</td>
              <td>{e.numberOfPurchases}</td>
              <td>{e.totalRevenues}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
