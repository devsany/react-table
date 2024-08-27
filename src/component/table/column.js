import ColumnFilter from "./ColumnFilter";

export const column = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
];

export const mergerColumn = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Filter: ColumnFilter,
      },
    ],
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    Filter: ColumnFilter,
  },
  {
    Header: "Gender",
    Footer: "Gender",
    accessor: "gender",
    Filter: ColumnFilter,
    disableFilters: true,
  },
];
