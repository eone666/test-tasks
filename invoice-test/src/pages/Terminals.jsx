import React, { useState, useEffect } from "react";
import TerminalForm from "../components/TerminalForm";
import TerminalTable from "../components/TerminalTable";

export default function Terminals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("terminals")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("terminals", JSON.stringify(data));
  }, [data]);

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    const joined = data.concat({
      id: data[data.length - 1] ? data[data.length - 1].id + 1 : 0,
      name: values.name,
      description: values.description,
    });
    setData(joined);
    setSubmitting(false);
    resetForm();
  };

  const deleteHandler = (id) => {
    setData(data.filter((e, i) => e.id !== id));
  };

  return (
    <div className="page terminals">
      <h1>Terminals</h1>
      <TerminalForm submitHandler={submitHandler}></TerminalForm>
      {data.length > 0 ? (
        <TerminalTable data={data} deleteHandler={deleteHandler} />
      ) : (
        <h2>Nothing found</h2>
      )}
    </div>
  );
}
