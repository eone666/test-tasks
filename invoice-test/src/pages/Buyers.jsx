import React, { useState } from "react";
import BuyersTable from "../components/BuyersTable";
import { buyers } from "../data/buyers";
import BuyersFilterForm from "../components/BuyersFilterForm";

export default function Buyers() {
  const [data, setData] = useState(buyers);
  const [isSortAsc, setSortAsc] = useState(true);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(15);
  const [currentPage, setCurentPage] = useState(0);
  const [pageCount, setPageCount] = useState(
    Math.ceil(buyers.length / perPage)
  );

  const handleFilter = (filterQuery) => {
    if (filterQuery === "") {
      handlePageClick(currentPage);
    } else {
      const filtered = buyers.filter((e) =>
        e.name.toLowerCase().includes(filterQuery.toLowerCase())
      );
      setData(filtered);
    }
  };

  const sortBy = (field) => {
    setData([...data].sort((a, b) =>
      isSortAsc
        ? a[field] - b[field]
        : b[field] - a[field]
    ));
    setSortAsc(!isSortAsc);
  };

  const handlePageClick = (page) => {
    const selectedPage = page;
    const offset = selectedPage * perPage;
    setOffset(offset);
    setCurentPage(selectedPage);
    const slice = buyers.slice(offset, offset + perPage);
    setData(slice);
    console.log(data);
  };

  const changeHandler = (e) => {
    setPerPage(Number(e.target.value));
    const slice = buyers.slice(0, Number(e.target.value));
    setData(slice);
    setPageCount(Math.ceil(buyers.length / Number(e.target.value)));
  };

  const paginationButtons = () => {
    let content = [];
    for (let i = 0; i < pageCount; i++) {
      content.push(
        <li className="pagination__item" key={i}>
          <button
            onClick={() => {
              handlePageClick(i);
            }}
            className="button pagination__button"
          >
            {i + 1}
          </button>
        </li>
      );
    }
    return content;
  };

  return (
    <div className="page buyers">
      <h1>Buyers</h1>
      <BuyersFilterForm handleFilter={handleFilter} />
      <select
        className="select items-on-page"
        value={perPage}
        onChange={changeHandler}
      >
        <option default value="15">
          15
        </option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
      <BuyersTable sortBy={sortBy} data={data} />
      <div className="pagination">
        <ul className="pagination__list">{paginationButtons()}</ul>
      </div>
    </div>
  );
}
