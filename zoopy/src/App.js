import React from "react";
import DisplayTable from "./components/DisplayTable";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <DisplayTable />
      <Pagination />
    </div>
  );
}

export default App;
