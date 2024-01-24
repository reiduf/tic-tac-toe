import { useState } from "react"

// TypeScript Stuff
type Squares = null | 'X' | 'O'

interface SquareProps {
  value: Squares,
}

// Components
function Square({ value }: SquareProps) {
  return <button className="square">{value}</button>
}


export default function Board() {
  const [squares, setSquares] = useState<Squares[]>(Array(9).fill(null)) //[null,null,null,null,null,null,null,null,null]
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </>
  );
}
