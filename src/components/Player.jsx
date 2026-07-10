import React from "react";
import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onNameChange }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((wasEditing) => !wasEditing);

    if (!isEditing) {
      onNameChange(symbol, playerName);
  }
  }
  
  function handleNameChange(event) {
    setPlayerName(event.target.value);
    onNameChange(symbol, playerName);
  }
  let editablePlayerName= <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }
  return (
    <li className = {isActive ? "active" : undefined}>
      <span className="player">
     {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
