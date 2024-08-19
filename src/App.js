import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    // Funkcja do rozpoczęcia gry
    setGameOver(false);
  };

  return (
    <div className="App">
      <div className="score-board">
        <p className="score">Score: 0</p>
        <div className="stars">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`star ${i < 2 ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
      <div className="countertop">
        <div className="board">
          <div className="cup">
            <img src="/cup.png" alt="Cup" />
          </div>
          <div className="cup">
            <img src="/cup.png" alt="Cup" />
          </div>
          <div className="cup">
            <img src="/cup.png" alt="Cup" />
          </div>
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
