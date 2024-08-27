import React, { useMemo } from "react";
import MOCK from "./Mock.json";
import { column } from "./Column";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
import GlobleFilterInput from "./GlobleFilterInput";

const BasicTableGlobelFilter = () => {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => MOCK, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );
  const {
    getTableProps,
    footerGroups,
    getTableBodyProps,
    rows,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;
  const { globalFilter } = state;
  return (
    <div>
      <GlobleFilterInput filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns) => {
                  return (
                    <th
                      {...columns.getHeaderProps(
                        columns.getSortByToggleProps()
                      )}
                    >
                      {columns.render("Header")} <br />
                      <div>
                        Search:
                        {columns.canFilter ? columns.render("Filter") : null}
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
                {footerGroup.headers.map((footer) => {
                  return (
                    <th {...footer.getFooterProps()}>
                      {footer.render("Footer")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </div>
  );
};

export default BasicTableGlobelFilter;
