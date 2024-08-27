import ColumnFilter from "../table/ColumnFilter";

export const column = [
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
        Footer: "First Name",
        accessor: "first_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
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
];
