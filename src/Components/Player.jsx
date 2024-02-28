import React from "react";
import { useState } from "react";

const Player = ({ player1, symbol, isActive}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player1);
  const handleEdit = () => {
    setIsEditing((editing) => !editing);
   
  };
  const handleSave = () => {
    setIsEditing((editing) => !editing);
  };
  const handleInput = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={handleInput}
            required
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEditing ? (
        <button onClick={handleEdit}>Edit</button>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}
    </li>
  );
};

export default Player;
