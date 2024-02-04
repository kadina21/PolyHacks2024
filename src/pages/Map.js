import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import GoogleMap from "../components/GoogleMap";
import { Link } from "react-router-dom";
import "./Map.css";

function Map() {
  return (
    <Layout>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="map-container">
        <GoogleMap />
      </div>
    </Layout>
  );
}

export default Map;
