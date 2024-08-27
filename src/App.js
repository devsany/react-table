import "./App.css";
import BasicTableGlobelFilter from "./component/filterTable/BasicTableGlobelFilter";
import TableRowSelection from "./component/RowSelection/TableRowSelection";
import BasicTable from "./component/table/BasicTable";
import FilterTable from "./component/table/GlobelFilterTable";
import BasicTable1 from "./component/table1/BasicTable1";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <FilterTable /> */}
      {/* <BasicTableGlobelFilter /> */}
      {/* <BasicTable1 /> */}
      <TableRowSelection />
    </div>
  );
}

export default App;
