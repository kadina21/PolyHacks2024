import React from "react";
import Navbar from "../components/Navbar";
import GetStarted from "../components/GetStarted";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="backgroundImage">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="gettingStarted">
          <GetStarted />
        </div>
      </div>
    </>
  );
}

export default Home;
