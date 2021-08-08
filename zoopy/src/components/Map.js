import React, { useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useDataLayerValue } from "../datastore/DataLayer";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
import markerImg from "../images/mapbox-icon.png";

const token =
  "pk.eyJ1IjoicG9vamFqMjEiLCJhIjoiY2tzMHQ5NWQzMTVydDJ2bXIzaDNpNXV0cSJ9.HgfJhnBEBDeCk99z0jZy-w";

export default function Map() {
  const [{ postalData, viewport, showPopup, popupObj }, dispatch] =
    useDataLayerValue();
  useEffect(()=>{
    const obj = {
      longitude: postalData[0].longitude,
      latitude: postalData[0].latitude,
      zoom: 3,
    };
    dispatch({ type: "SET_VIEW_PORT", viewport: obj });
  },[])
  const triggerPopup = (e, obj) => {
    dispatch({
      type: "SET_POPUP_OBJ",
      popupObj: obj,
    });
    dispatch({ type: "SET_SHOW_POPUP", showPopup: true });
  };
  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(nextViewport) =>
        dispatch({ type: "SET_VIEW_PORT", viewport: nextViewport })
      }
      mapboxApiAccessToken={token}
    >
      {postalData &&
        postalData.map((a, i) => (
          <Marker key={i} longitude={a.longitude} latitude={a.latitude}>
            <div className="marker" onClick={(e) => triggerPopup(e, a)}>
              <img src={markerImg} />
            </div>
          </Marker>
        ))}
      {showPopup && popupObj && (
        <Popup
          latitude={popupObj.latitude}
          longitude={popupObj.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => dispatch({ type: "SET_SHOW_POPUP", showPopup: false })}
        >
          <div>
            {popupObj.city +
              ", " +
              popupObj.country +
              " - " +
              popupObj.postal_code}
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
}
