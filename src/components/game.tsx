import React, { useState } from 'react'
import Board from '../components/board';
import caluculateWinner from '../services/calculate-winner';

type Squares = {
    squares: ('X' | 'O' | null)[]
}

const Game: React.VFC = () => {
    
    const [history, setHistory] = useState<Squares[]>([{squares: Array(9).fill(null)}]);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [xIsNext, setXisNext] = useState<boolean>(true);
    
    const current = history[stepNumber];
    const winner: ('X' | 'O' | null) = caluculateWinner(current.squares)

    let status: string;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    const moves: JSX.Element[] = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    const jumpTo = (step: number) : void => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    }

    const handleClick = (i: number): void => {
        const actualHistory: Squares[] = history.slice(0, stepNumber + 1)
        const actualCurrent: Squares = actualHistory[actualHistory.length - 1];
        const squares: ('X' | 'O' | null)[] = actualCurrent.squares.slice();
        if (winner || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(actualHistory.concat([{
            squares: squares,
        }]));
        setStepNumber(actualHistory.length);
        setXisNext(!xIsNext);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i: number) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{ status }</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
  }
  
  export default Game;