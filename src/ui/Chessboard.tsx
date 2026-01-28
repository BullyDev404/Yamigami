import { Chessboard } from "react-chessboard";

type ChessBoardProps = {
  position?: string;
  size?: number;
  darkSquare?: string;
  lightSquare?: string;
  draggable?: boolean;
  ghostOpacity?: number;
  notation?: boolean;
  animationDuration?: number;
  boardStyle?: React.CSSProperties;
  draggingPieceStyle?: React.CSSProperties;
  highlightSquares?: Record<string, React.CSSProperties>;
};

function ChessBoard({
  position = "",
  size = 420,
  draggable = false,
  darkSquare = "#B58863",
  lightSquare = "#F0D9B5",
  ghostOpacity = 0.5,
  notation = false,
  animationDuration = 200,
  boardStyle = { borderRadius: "8px" },
  draggingPieceStyle = { transform: "scale(1)" },
  highlightSquares = {},
}: ChessBoardProps) {
  return (
    <div style={{ width: size, height: size }}>
      <Chessboard
        options={{
          darkSquareStyle: { backgroundColor: darkSquare },
          lightSquareStyle: { backgroundColor: lightSquare },
          draggingPieceGhostStyle: { opacity: ghostOpacity },
          showNotation: notation,
          canDragPiece: draggable,
          animationDurationInMs: animationDuration,
          boardStyle,
          draggingPieceStyle,
          squareStyles: highlightSquares,
        }}
        // notation={false}
        position={position}
        boardWidth={size}
        arePiecesDraggable={draggable}
      />
    </div>
  );
}

export default ChessBoard;