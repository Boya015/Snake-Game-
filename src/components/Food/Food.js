// src/Food.js
import React from 'react';
import './Food.css';

const Food = ({ dot }) => {
  return  <div className="food" style={{ left: `${dot[0]}px`, top: `${dot[1]}px` }}></div>;
};

export default Food;
