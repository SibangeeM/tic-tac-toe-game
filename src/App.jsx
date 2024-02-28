import { useState } from "react";
import Gameboard from "./Components/Gameboard";
import Gameover from "./Components/Gameover";
import Log from "./Components/Log";
import Player from "./Components/Player";
import { WINNING_COMBINATIONS } from "./Components/WINNING_COMBINATIONS";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {

  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const handleRematch = () => {
    setGameTurns([]);
  };

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSeclectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((player) => (player === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  };


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            
            player1="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            
            player1="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <Gameover

            winner={winner}
            hasDraw={hasDraw}
            handleRematch={handleRematch}
          ></Gameover>
        )}
        <Gameboard
          handleSeclectSquare={handleSeclectSquare}
          gameBoard={gameBoard}
        ></Gameboard>
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
