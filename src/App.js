// src/App.js
import React, { useState } from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import Score from './components/Score/Score';
import Introduction from './components/Introduction/Introduction';
import GameOver from './components/GameOver/GameOver';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const endGame = () => {
    setGameOver(true);
    setGameStarted(false);
  };

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  return (
    <div className="app">
      {gameOver ? (
        <GameOver score={score} restartGame={restartGame} />
      ) : gameStarted ? (
        <>
          <Score score={score} />
          <GameBoard setScore={setScore} endGame={endGame} />
        </>
      ) : (
        <Introduction startGame={startGame} />
      )}
    </div>
  );
};

export default App;
