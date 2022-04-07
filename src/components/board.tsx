import React, { useState } from 'react';
import Square from '../components/square'

type Props = {
    squares: ('X' | 'O' | null)[];
    onClick: (i: number) => void;
}

const Board: React.VFC<Props> = (props) => {

    const renderSquare = (i: number): JSX.Element => {
      return (
        <Square
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
        />
      );
    }
    
    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;