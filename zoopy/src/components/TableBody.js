import React from "react";

const TableBody = ({obj}) => {
  return (
      <div className="table-row">
        <div className="data">{obj.postal_code || "Not Available"}</div>
        <div className="data">{obj.longitude}</div>
        <div className="data">{obj.latitude}</div>
        <div className="data">{obj.city}</div>
        <div className="data">{obj.country}</div>
      </div>
  );
};

export default TableBody;
