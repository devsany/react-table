import React from "react";

const EachRowInputFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div>
      <input value={filterValue} onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
};

export default EachRowInputFilter;
