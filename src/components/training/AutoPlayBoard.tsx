import React, { useState, useEffect, useMemo } from "react";
import { Chess } from "chess.js";
import ChessBoard from "../../ui/Chessboard";
import { Miniatures } from "../../data/Miniatures";

const AutoplayBoard: React.FC<{ size?: number }> = ({ size = 420 }) => {
  const [gameIndex, setGameIndex] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [moveIndex, setMoveIndex] = useState(0);

  // Parse moves for the current game
  const moveHistory = useMemo(() => {
    const tempGame = new Chess();
    try {
      tempGame.loadPgn(Miniatures[gameIndex].pgn);
      return tempGame.history();
    } catch (e) {
      console.error("PGN error", e);
      return [];
    }
  }, [gameIndex]);

  useEffect(() => {
    let timer;

    if (moveIndex < moveHistory.length) {
      timer = setTimeout(() => {
        const gameCopy = new Chess(game.fen());
        gameCopy.move(moveHistory[moveIndex]);
        setGame(gameCopy);
        setMoveIndex((prev) => prev + 1);
      }, 600);
    } else {
      timer = setTimeout(() => {
        setGame(new Chess());
        setMoveIndex(0);
        setGameIndex((prev) => (prev + 1) % Miniatures.length);
      }, 1200);
    }

    return () => clearTimeout(timer);
  }, [moveIndex, moveHistory, game, gameIndex]);

  return (
    <ChessBoard
      id="autoplay-board"
      position={game.fen()}
      darkSquare="#782ead"
      lightSquare="white"
      size={size}
    />
  );
};

export default AutoplayBoard;
