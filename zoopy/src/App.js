import React, {useEffect} from "react";
import { useDataLayerValue } from "./datastore/DataLayer";
import DisplayTable from "./components/DisplayTable";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Map from "./components/Map";
import { removeUnavailableData } from "./helper/getEntries";
import "./App.css";

function App() {
  const [{ postalData}, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    let _data = removeUnavailableData(postalData);
    dispatch({
      type: "SET_POSTAL_DATA",
      postalData: _data,
    });
}, []);

return (
    <div className="App">
      <div className="leftCol">
        <Search />
        <DisplayTable />
        <Pagination />
      </div>
      <div className="rightCol">
        {/* <MapsData /> */}
        <Map />
      </div>
    </div>
  );
}

export default App;
