import React, { useMemo } from "react";
import { column, mergerColumn } from "./column";
import MOCK_API from "./MOCK_API.json";
import { useTable, useSortBy } from "react-table";

const BasicTable = () => {
  const columns = useMemo(() => mergerColumn, []);
  const data = useMemo(() => MOCK_API, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  const {
    getTableProps,
    getTableBodyProps,
    footerGroups,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div>
      Basic Table
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              return (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    return (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
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
                      <th
                        {...column.getFooterProps(
                          column.getSortByToggleProps()
                        )}
                      >
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

export default BasicTable;
