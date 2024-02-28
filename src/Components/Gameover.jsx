import React from "react";

const Gameover = ({ winner, hasDraw, handleRematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {hasDraw && <p>Its a Draw!</p>}
      <p>
        <button onClick={handleRematch}>Rematch</button>
      </p>
    </div>
  );
};

export default Gameover;
