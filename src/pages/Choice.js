import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./Choice.css";

function Choice() {
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const [checkedFour, setCheckedFour] = React.useState(false);

  const [filters, setFilters] = useState({});

  const handleChangeOne = (event) => {
    const { name, checked } = event.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = (event) => {
    const { name, checked } = event.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
    setCheckedTwo(!checkedTwo);
  };

  const handleChangeThree = (event) => {
    const { name, checked } = event.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
    setCheckedThree(!checkedThree);
  };

  const handleChangeFour = (event) => {
    const { name, checked } = event.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
    setCheckedFour(!checkedFour);
  };

  const submitFilters = () => {
    fetch("http://localhost:3001/api/data", {
      method: "POST", // Ou GET avec des paramètres de requête, selon votre configuration
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filters }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Traiter les données filtrées reçues
      })
      .catch((error) => console.error(error));
  };

  return (
    <Layout>
      <div className="backgroundImage">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="choice-container">
          <h1 className="choice-title">
            Choisis les catégories de meubles souhaitées
          </h1>
          <div className="checkbox-group">
            <Checkbox
              label="Sofa"
              value={checkedOne}
              onChange={handleChangeOne}
              image="sofa.png"
            />
            <Checkbox
              label="Table"
              value={checkedTwo}
              onChange={handleChangeTwo}
              image="table-ronde.png"
            />
          </div>
          <div className="checkbox-group">
            <Checkbox
              label="Bureau"
              value={checkedThree}
              onChange={handleChangeThree}
              image="bureau.png"
            />
            <Checkbox
              label="Bibliothèque"
              value={checkedFour}
              onChange={handleChangeFour}
              image="etagere-a-livres.png"
            />
          </div>
        </div>

        <div className="button-suivant">
          <Link to="/map">
            <button className="choice-button">Suivant</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Choice;
