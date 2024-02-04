import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/choice"><button>Go to Choice Page</button></Link>
      <Link to="/map"><button>Go to Map Page</button></Link>  
      
    </div>
  );
}

export default Home;