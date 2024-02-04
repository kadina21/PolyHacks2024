import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function GoogleMap() {
  const position = { lat: 45.50884, lng: -73.58781 };
  return (
    <APIProvider apiKey="AIzaSyBXZHHRNRC2kFtXN_mPaLZbrtlGwjYxhOk">
      <div style={{ height: "100vh" }}>
        <Map zoom={9} center={position}></Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMap;
