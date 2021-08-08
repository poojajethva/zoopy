import React, { useEffect } from "react";
import { useDataLayerValue } from "../datastore/DataLayer";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import getEntries from "../helper/getEntries";
import "./DisplayTable.css";

const DisplayTable = () => {
  const [
    { postalData, dataChunk, currentPage, nextStart, backToResults },
    dispatch,
  ] = useDataLayerValue();
  useEffect(() => {
    if (!backToResults) {
      let _dataChunk = getEntries(postalData, nextStart);
      dispatch({
        type: "SET_DATA_CHUNK",
        dataChunk: _dataChunk.data,
      });
    }
  }, [currentPage, postalData, backToResults]);

  return (
    <table className="tableData">
      <TableHeading />
      <tbody>
        {dataChunk
          ? dataChunk.map((d, i) => {
              return <TableBody key={i} obj={d} />;
            })
          : "Loading..."}
      </tbody>
    </table>
  );
};

export default DisplayTable;
