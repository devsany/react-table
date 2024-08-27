import React, { useMemo } from "react";
import MOCK_API from "./MOCK_API.json";
import { COLUMN } from "./COLUMN";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import GlobalInput from "./GlobalInput";

const TableRowSelection = () => {
  const columns = useMemo(() => COLUMN, []);
  const data = useMemo(() => MOCK_API, []);
  const tableInstance = useTable(
    {
      data,
      columns,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableBodyProps,
    getTableProps,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state,
    prepareRow,
    headerGroups,
    pageCount,
    setGlobalFilter,
    toggleHideAllColumns,
    toggleHideColumn,
  } = tableInstance;
  console.log(tableInstance);
  const { globalFilter, pageIndex } = state;
  return (
    <div>
      <button onClick={() => toggleHideAllColumns()}>Hide Table</button>
      <button onClick={() => toggleHideColumn(1, 2)}>hide Column</button>
      Row Selection
      <h2>Global Filter</h2>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Global filter{" "}
        <GlobalInput filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          <strong>{pageIndex + 1}</strong> of <strong>{pageCount}</strong>
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous Page
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default TableRowSelection;
