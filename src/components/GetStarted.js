import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <>
      <div className="accroche">
        <h1 className="slogan">Trouvez des trésors cachés</h1>
        <blockquote className="quote">
          "One man's trash is another man's treasure"
        </blockquote>
        <button className="buttonStart">Get Started</button>
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