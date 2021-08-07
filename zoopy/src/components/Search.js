import React, { useEffect } from "react";
import { useDataLayerValue } from "../datastore/DataLayer";
import { getSearchedQuery } from "../helper/getEntries";
import "./Search.css";

const Search = () => {
  const [{ postalData, searchTerm}, dispatch] = useDataLayerValue();

  const handleChange = (e) => {
    let val = e.target.value;
    dispatch({
      type: "SET_SEARCH_TERM",
      searchTerm: val,
    });
  };

  const handleSubmit = (e) => {
    const obj = getSearchedQuery(postalData, searchTerm);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search for Postal Code"
        onChange={handleChange}
        value={searchTerm}
      />
      <button type="submit" className="searchButton" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Search;
