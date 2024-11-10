import React, { useState, useEffect } from "react";
import ObjectsList from "../components/ObjectsList";
import ObjectsFilter from "../components/ObjectsFilter";
import { Alert } from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState([]);
  const [cachedData, setCachedData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("http://178.90.223.230:6132/home/GetObj_JSON/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCachedData(data);
      })
      .catch((err) => setError(err));
  }, []);

  const filterData = (filterQuery) => {
    const filtered = cachedData.filter((e) =>
      e.Name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setData(filtered);
  };

  return (
    <div className="home-page">
      <h1 className="mb-4">Registry</h1>
      {error ? (
        <Alert variant="danger">{error.message}</Alert>
      ) : (
        <>
          <ObjectsFilter filterData={filterData} />
          <ObjectsList data={data} />
        </>
      )}
    </div>
  );
};

export default Home;
