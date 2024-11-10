import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import ReportsList from "../components/ReportsList";

const Reports = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`http://178.90.223.230:6132/home/GetJournal_JSON?id=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err));
  }, [id]);
  return (
    <div className="report-page">
      <h1 className="mb-4">Reports</h1>
      {error ? (
        <Alert variant="danger">{error.message}</Alert>
      ) : (
        <>
          <ReportsList data={data} />
          <Link to={`/newreport/${id}`}>
            <Button>New report</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Reports;
