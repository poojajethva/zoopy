import React, { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useDataLayerValue } from "../datastore/DataLayer";
import mapboxgl from "mapbox-gl";
import "./MapsData.css";
import { getGeoObject } from "../helper/mapsHelper";

const MapsData = () => {
  const [{ postalData, mapObj }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const geoObjEles = getGeoObject(postalData);
    mapboxgl.accessToken =
      "pk.eyJ1IjoicG9vamFqMjEiLCJhIjoiY2tzMHQ5NWQzMTVydDJ2bXIzaDNpNXV0cSJ9.HgfJhnBEBDeCk99z0jZy-w";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: geoObjEles[0].geometry.coordinates,
      zoom: 3,
    });
    dispatch({
      type: "SET_MAP_OBJ",
      mapObj: map,
    });
    const geojson = {
      type: "FeatureCollection",
      features: geoObjEles,
    };
    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";
      el.id = marker.geometry.coordinates.join("");

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        // .setPopup(
        //   new mapboxgl.Popup({ offset: 25 }) // add popups
        //     .setHTML(
        //       "<h3>" +
        //         marker.properties.title +
        //         "</h3><p>" +
        //         marker.properties.description +
        //         "</p>"
        //     )
        // )
        .addTo(map);
    });
    setTimeout(() => {
      map.resize();
    }, 100);
  }, []);

  return <div id="map"></div>;
};

export default MapsData;
