import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [cups, setCups] = useState([]);
  const [flippedCupIndex, setFlippedCupIndex] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const newCups = Array(3).fill(false);
    const randomIndex = Math.floor(Math.random() * 3);
    newCups[randomIndex] = true; // Randomly place the ball under one of the cups

    setCups(newCups);
    setFlippedCupIndex(null);
    setGameOver(false);
  };

  const handleCupClick = (index) => {
    if (gameOver || flippedCupIndex !== null) {
      return;
    }

    setFlippedCupIndex(index);

    if (cups[index]) {
      setScore(score + 1);
      setTimeout(() => {
        startGame();
      }, 500);
    } else {
      setGameOver(true);
      setTimeout(() => {
        startGame();
      }, 500);
    }
  };

  const getStars = () => {
    if (score >= 5) return 3;
    if (score >= 3) return 2;
    if (score >= 1) return 1;
    return 0;
  };

  return (
    <div className="App">
      <div className="score-board">
        <p className="score">Score: {score}</p>
        <div className="stars">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`star ${i < getStars() ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
      <div className="countertop">
        <div className="board">
          {cups.map((_, index) => (
            <div key={index} className="cup" onClick={() => handleCupClick(index)}>
              <img src="/cup.png" alt="Cup" />
            </div>
          ))}
        </div>
      </div>
      {gameOver && (
        <div className="game-over-container">
          <div className="game-over">
            <h1>Game Over!</h1>
            <p>Play again!</p>
            <h2 onClick={startGame}>RESTART</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
