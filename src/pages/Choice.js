import React from 'react';
import { Link } from 'react-router-dom';

function Choice() {
  return (
    <div>
      <h1>Choice Page</h1>
      <Link to="/map"><button>Go to Map Page</button></Link>  
    </div>
  );
}

export default Choice;