import { Chessboard } from "react-chessboard";

type ChessBoardProps = {
  id?: string;
  position?: string;
  size?: number;
  darkSquare?: string;
  lightSquare?: string;
  draggable?: boolean;
  notation?: boolean;
};

function ChessBoard({
  id = "chessboard",
  position = "start",
  size = 420,
  draggable = false,
  darkSquare = "#B58863",
  lightSquare = "#F0D9B5",
  notation = false,
}: ChessBoardProps) {
  return (
    <div style={{ width: size, height: size }}>
      <Chessboard
        id={id}
        position={position}
        boardWidth={size}
        arePiecesDraggable={draggable}
        customDarkSquareStyle={{ backgroundColor: darkSquare }}
        customLightSquareStyle={{ backgroundColor: lightSquare }}
        customBoardStyle={{ borderRadius: "8px" }}
        boardOrientation="white"
        notation = {notation}
      />
    </div>
  );
}

export default ChessBoard;
