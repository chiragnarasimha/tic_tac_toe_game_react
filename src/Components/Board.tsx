import Square from "./Square";
import "./Board.css";

const Board = () => {
  const renderSquare = (i: number) => {
    return <Square />;
  };

  const status = "Next Player: X";
  return (
    <div>
      <div className={"Status"}>{status}</div>
      <div className={"board-row"}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={"board-row"}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={"board-row"}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
    </div>
  );
};

export default Board;
