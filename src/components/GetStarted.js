import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";

function GetStarted() {
  return (
    <>
      <div className="accroche">
        <h1 className="slogan">Trouvez des trésors cachés</h1>
        <blockquote className="quote">
          "One man's trash is another man's treasure"
        </blockquote>
        <Link to="/choice">
          <button className="buttonStart">Get Started</button>
        </Link>
      </div>
      <div className="vendeur">
        <h2 className="invite">
          Rien à acheter?
          <button className="buttonSell">Je liste mes biens</button>
        </h2>
      </div>
    </>
  );
}

export default GetStarted;
