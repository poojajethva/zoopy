import React from "react";
import { useDataLayerValue } from "../datastore/DataLayer";
import { FlyToInterpolator } from "react-map-gl";
import { getSearchedQuery } from "../helper/getEntries";
import "./Search.css";
const Search = () => {
  const [{ postalData, searchTerm, viewport, errorMsg }, dispatch] =
    useDataLayerValue();

  const handleChange = (e) => {
    let val = e.target.value;
    dispatch({
      type: "SET_SEARCH_TERM",
      searchTerm: val,
    });
    dispatch({
      type: "SET_ERROR_MSG",
      errorMsg: false,
    });
  };

  const searchLocator = (arr) => {
    return {
      longitude: arr[0].longitude,
      latitude: arr[0].latitude,
      zoom: 9,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
    };
  };

  const handleSubmit = (e) => {
    const arr = getSearchedQuery(postalData, searchTerm);
    if (arr.length) {
      const obj = searchLocator(arr);
      console.log(obj);
      dispatch({ type: "SET_VIEW_PORT", viewport: obj });
      dispatch({
        type: "SET_DATA_CHUNK",
        dataChunk: arr,
      });
      dispatch({
        type: "SET_POPUP_OBJ",
        popupObj: arr[0],
      });
      dispatch({ type: "SET_SHOW_POPUP", showPopup: true });
      dispatch({ type: "SET_BACK_TO_RESULTS", backToResults: true });
    } else {
      dispatch({ type: "SET_BACK_TO_RESULTS", backToResults: false });
      dispatch({
        type: "SET_ERROR_MSG",
        errorMsg: true,
      });
    }
  };

  return (
    <>
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
      {errorMsg && <div className="errorMsg">Postal Code not found!!!</div>}
    </>
  );
};

export default Search;
