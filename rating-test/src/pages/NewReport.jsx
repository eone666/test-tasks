import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import NewReportForm from "../components/NewReportForm";

const NewReport = () => {
  const { id } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fetchError, setFetchError] = useState();

  const submitHandler = (values) => {
    fetch("https://178.90.223.230:6132/home/SetData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        objId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setIsSubmitted(true);
        }
      })
      .catch((err) => {
        setFetchError(err.message);
      });
  };

  if (isSubmitted) return <Redirect to={`/reports/${id}`} />;

  return (
    <div>
      <h1>New report</h1>
      <NewReportForm submitHandler={submitHandler} fetchError={fetchError} />
    </div>
  );
};

export default NewReport;
