import React, { useMemo } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMN } from "./column";
import { useTable } from "react-table";

const BasicTable = () => {
  const columns = useMemo(() => COLUMN, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  console.log(tableInstance);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    headers,
    prepareRow,
    rows,
  } = tableInstance;
  return (
    <div>
      <h2>Table</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th {...columns.getHeaderProps()}>
                  {columns.render("Header")}
                </th>
              ))}
            </tr>;
          })}
        </thead>
        <tbody {...getTableBodyProps()}></tbody>
      </table>
    </div>
  );
};

export default BasicTable;
