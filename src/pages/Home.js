import React from "react";
import Navbar from "../components/Navbar";
import GetStarted from "../components/GetStarted";
import "./Home.css";
import Layout from "../components/Layout";

function Home() {
  return (
    <>
      <Layout>
        <div className="backgroundImage">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="gettingStarted">
            <GetStarted />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
