import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="image-block left">
        <img src="/image1_0.jpg" alt='Motherboard'/>
      </div>
      <div className="color-block right">
        <div className="overlay">
          <hr />
          <h1>This Is My Portfolio!!!!</h1>
          <hr />
          <p>Enjoy your stay........</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
