import React, { useState } from "react";

export default function BuyersFilterForm({ handleFilter }) {
  const [filterQuery, setFilterQuery] = useState("");
  return (
    <div className="buyers-filter">
      <input
        onChange={(e) => {
          setFilterQuery(e.target.value);
          handleFilter(e.target.value);
        }}
        value={filterQuery}
        className="input buyers-filter__input"
        type="text"
        placeholder="Start typing to filter"
      />
    </div>
  );
}
