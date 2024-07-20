// src/components/Introduction/Introduction.js
import React from 'react';
import './Introduction.css';

const Introduction = ({ startGame }) => {
  return (
    <div className="introduction">
      <h1>Welcome to Snake Game</h1>
      <button onClick={startGame}>Play Game</button>
    </div>
  );
};

export default Introduction;
