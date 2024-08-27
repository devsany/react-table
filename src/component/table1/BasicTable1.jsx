import React, { useMemo } from "react";
import MOCK from "./Mock.json";
import { column } from "./columns";
import { useTable } from "react-table";

const BasicTable1 = () => {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => MOCK, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableBodyProps, getTableProps, headerGroups } = tableInstance;
  return (
    <div>
      table
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <td {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default BasicTable1;
