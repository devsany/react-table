import React from "react";

const GlobleFilterInput = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        placeholder="Enter any Gorup name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default GlobleFilterInput;
