import React from "react";
import { MapContainer } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import "./style.css";

const MapComponent = () => {
  const position = [24, 90];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={8}
        className="w-full z-10 h-[100vh] "
      >
        <ReactLeafletGoogleLayer apiKey="AIzaSyAf9yCy5ZZ6iEo0EyOWjUg4EpUHIeuZVWQ" />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
