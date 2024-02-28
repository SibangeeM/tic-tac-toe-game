import React from "react";
import { useState } from "react";



const Gameboard = ({ handleSeclectSquare, gameBoard }) => {
  
  return (
    <ol id="game-board">
      {gameBoard.map((row, ir) => (
        <li key={ir}>
          <ol>
            {row.map((playerSymbol, ic) => (
              <li key={ic}>
                <button onClick={() => handleSeclectSquare(ir, ic)} disabled= {playerSymbol!== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default Gameboard;

