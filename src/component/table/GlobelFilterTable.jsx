import React, { useMemo } from "react";
import { column, mergerColumn } from "./column";
import MOCK_API from "./MOCK_API.json";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import GlobelInput from "./GlobelInput";

const FilterTable = () => {
  const columns = useMemo(() => mergerColumn, []);
  const data = useMemo(() => MOCK_API, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );
  const {
    getTableProps,
    getTableBodyProps,
    footerGroups,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;
  console.log(tableInstance);
  const { globalFilter } = state;
  return (
    <div>
      Basic Table
      <GlobelInput filter={globalFilter} setFilter={setGlobalFilter} />
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              return (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    return (
                      <th {...column.getHeaderProps()}>
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
            {rows.map((row) => {
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
          <tfoot>
            {footerGroups.map((footerGroup) => {
              return (
                <tr {...footerGroup.getFooterGroupProps()}>
                  {footerGroup.headers.map((column) => {
                    return (
                      <th {...column.getFooterProps()}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default FilterTable;
