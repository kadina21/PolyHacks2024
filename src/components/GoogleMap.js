import React from "react";
import {
  APIProvider,
  Map,
  Marker,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
//import les data ici (import data as ...)

function GoogleMap() {
  const position = { lat: 45.50884, lng: -73.58781 };
  return (
    <APIProvider apiKey="AIzaSyBXZHHRNRC2kFtXN_mPaLZbrtlGwjYxhOk">
      <div style={{ height: "100vh" }}>
        <Map zoom={9} center={position} mapId="6d1249dbe7609002">
          <Marker position={position} icon="bureau.png" />
        </Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMap;
