// Cup.js
import React from 'react';
import './Cup.css'; // Plik CSS dla stylizacji kubków

const Cup = ({ isFlipped, hasBall, onClick }) => {
  return (
    <div className={`cup ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <img src={isFlipped ? (hasBall ? '/egg.png' : '/Cup.png') : '/Cup.png'} alt="cup" />
    </div>
  );
};

export default Cup;
