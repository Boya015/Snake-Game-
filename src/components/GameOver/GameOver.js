// src/components/GameOver/GameOver.js
import React from 'react';
import './GameOver.css';

const GameOver = ({ restartGame, score }) => {
  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <p>Your Score: {score}</p>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
};

export default GameOver;
