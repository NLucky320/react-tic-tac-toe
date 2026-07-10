import React from 'react';

const GameOver = ({winner, onRematch}) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winner ? `${winner} won` : "It's a draw!"}</p>
            <button onClick={onRematch}>Rematch!</button>
        </div>
    );
};

export default GameOver;