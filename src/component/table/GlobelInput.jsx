import React from "react";

const GlobelInput = ({ filter, setFilter }) => {
  return (
    <span>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

export default GlobelInput;
