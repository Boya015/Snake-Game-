// src/components/Snake/Snake.js
import React from 'react';
import './Snake.css';

const Snake = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => (
        <div
          className="snake"
          key={i}
          style={{ left: `${dot[0]}px`, top: `${dot[1]}px` }}
        ></div>
      ))}
    </div>
  );
};

export default Snake;
