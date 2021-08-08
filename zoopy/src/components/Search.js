import React, { useEffect } from "react";
import { useDataLayerValue } from "../datastore/DataLayer";
import mapboxgl from "mapbox-gl";
import { getSearchedQuery } from "../helper/getEntries";
import "./Search.css";

const Search = () => {
  const [{ postalData, searchTerm, mapObj, errorMsg }, dispatch] =
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
    mapObj.flyTo({
      center: [arr[0].longitude, arr[0].latitude],
      essential: true,
    });
    var popUps = document.getElementsByClassName("mapboxgl-popup");
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([arr[0].longitude, arr[0].latitude])
      .setHTML(
        "<h3>" +
          "Zoopy" +
          "</h3><p>" +
          arr[0].city + ", " + arr[0].country + 
          "</p>"
      )
      .addTo(mapObj);
  };

  const handleSubmit = (e) => {
    const arr = getSearchedQuery(postalData, searchTerm);
    if (arr.length) {
      searchLocator(arr);
    } else {
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
