import React from "react";

const TableBody = ({obj}) => {
  return (
      <tr>
        <td>{obj.postal_code || "Not Available"}</td>
        <td>{obj.longitude}</td>
        <td>{obj.latitude}</td>
        <td>{obj.city}</td>
        <td>{obj.country}</td>
      </tr>
  );
};

export default TableBody;
