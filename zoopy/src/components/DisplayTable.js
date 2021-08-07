import React, { useEffect } from "react";
import { useDataLayerValue } from "../datastore/DataLayer";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import getEntries from "../helper/getEntries";
import "./DisplayTable.css";

const DisplayTable = () => {
  const [{ postalData, dataChunk, currentPage, nextStart }, dispatch] =
    useDataLayerValue();
  useEffect(() => {
      let _dataChunk = getEntries(postalData, nextStart);
      dispatch({
        type: "SET_DATA_CHUNK",
        dataChunk: _dataChunk.data,
      });
      dispatch({
        type: "SET_NEXT_START",
        nextStart: _dataChunk.nextStart,
      });
  }, [currentPage]);

  return (
    <section className="container">
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
    </section>
  );
};

export default DisplayTable;
