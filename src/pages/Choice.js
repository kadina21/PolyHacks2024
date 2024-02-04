import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Checkbox from '../components/Checkbox';
import React from 'react';
import './Choice.css';


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
        <div className="backgroundImage">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="choice-container">
          <h1 className="choice-title">Catégories</h1>
          <div className="checkbox-group">
              <Checkbox
                  label="Catégorie 1"
                  value={checkedOne}
                  onChange={handleChangeOne}
              />
              <Checkbox
                  label="Catégorie 2"
                  value={checkedTwo}
                  onChange={handleChangeTwo}
              />
          </div>
          <div className="checkbox-group">
              <Checkbox
                  label="Catégorie 3"
                  value={checkedThree}
                  onChange={handleChangeThree}
              />
              <Checkbox
                  label="Catégorie 4"
                  value={checkedFour}
                  onChange={handleChangeFour}
              />
          </div>
        </div>
      
          
          <div className='button-suivant'>
          <Link to="/map"><button className="choice-button">Suivant</button></Link>
          </div>
      </div>
  );
}

export default Choice;