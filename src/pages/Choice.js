import React from "react";
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

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
  };

  const handleChangeFour = () => {
    setCheckedFour(!checkedFour);
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
