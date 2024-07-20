// src/components/GameBoard/GameBoard.js
import React, { useState, useEffect } from 'react';
import Snake from '../Snake/Snake';
import Food from '../Food/Food';
import './GameBoard.css';

const getRandomPosition = () => {
  const min = 1;
  const max = 19;
  const x = Math.floor((Math.random() * (max - min + 1) + min)) * 20;
  const y = Math.floor((Math.random() * (max - min + 1) + min)) * 20;
  return [x, y];
};

const GameBoard = ({ setScore, endGame }) => {
  const [snakeDots, setSnakeDots] = useState([[0, 0], [20, 0]]);
  const [food, setFood] = useState(getRandomPosition());
  const [direction, setDirection] = useState('RIGHT');

  const checkIfOutOfBorders = (head) => {
    if (head[0] >= 400 || head[0] < 0 || head[1] >= 400 || head[1] < 0) {
      endGame();
    }
  };

  const checkIfCollapsed = (snake) => {
    let snakeBody = [...snake];
    let head = snakeBody[snakeBody.length - 1];
    snakeBody.pop();
    snakeBody.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        endGame();
      }
    });
  };

  const checkIfEat = (head) => {
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(getRandomPosition());
      setScore(prev => prev + 1);
      enlargeSnake();
    }
  };

  const enlargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  };

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case 'RIGHT':
        head = [head[0] + 20, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 20, head[1]];
        break;
      case 'UP':
        head = [head[0], head[1] - 20];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 20];
        break;
      default:
        break;
    }

    dots.push(head);
    dots.shift();

    setSnakeDots(dots);
    checkIfOutOfBorders(head);
    checkIfCollapsed(dots);
    checkIfEat(head);
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        setDirection('UP');
        break;
      case 'ArrowDown':
        setDirection('DOWN');
        break;
      case 'ArrowLeft':
        setDirection('LEFT');
        break;
      case 'ArrowRight':
        setDirection('RIGHT');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    const interval = setInterval(moveSnake, 200);
    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [snakeDots, direction]);

  return (
    <div className="game-board">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  );
};

export default GameBoard;
