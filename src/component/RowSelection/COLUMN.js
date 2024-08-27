import EachRowInputFilter from "./EachRowInputFilter";

export const COLUMN = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    Filter: EachRowInputFilter,
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
        Footer: "First Name",
        Filter: EachRowInputFilter,
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "Last Name",
        Filter: EachRowInputFilter,
      },
    ],
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    Filter: EachRowInputFilter,
  },
  {
    Header: "Gender",
    Footer: "Gender",
    accessor: "gender",
    Filter: EachRowInputFilter,
  },
];
