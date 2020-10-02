import styled from 'styled-components';
import React, {useState} from "react";

const Field = styled.div`
  width: 100px;
  height: 100px;
  border: solid black 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  font-size: 65px;
`

const StyledGameBoard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 10px 10px 10px;
`

const StatusText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`

const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  width: 290px;
`

const TicTacToeWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: #1b1e21;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const gameResult = {
    win: "win",
    draw: "draw",
    keep: "keep"
};

export const TicTacToe = () => {
    const [scoreO, setScoreO] = useState(0)
    const [scoreX, setScoreX] = useState(0)
    const [turn, setTurn] = useState("X")
    const [statusText, setText] = useState("Let us Start!")

    const [board, setBoard] = useState(
        [{"id": 0, "symbol": ""}, {"id": 1, "symbol": ""}, {"id": 2, "symbol": ""},
            {"id": 3, "symbol": ""}, {"id": 4, "symbol": ""}, {"id": 5, "symbol": ""},
            {"id": 6, "symbol": ""}, {"id": 7, "symbol": ""}, {"id": 8, "symbol": ""}]);

    const clearBoard = () => {
        setBoard([{"id": 0, "symbol": ""}, {"id": 1, "symbol": ""}, {"id": 2, "symbol": ""},
            {"id": 3, "symbol": ""}, {"id": 4, "symbol": ""}, {"id": 5, "symbol": ""},
            {"id": 6, "symbol": ""}, {"id": 7, "symbol": ""}, {"id": 8, "symbol": ""}]);
    }

    const checkBoard = (symbol, numberCombination) => {
        if (board[numberCombination[0]].symbol === symbol && board[numberCombination[1]].symbol === symbol && board[numberCombination[2]].symbol === symbol) {
            return gameResult.win
        } else if (board.filter(field => field.symbol === '').length <= 0) {
            return gameResult.draw
        }
        return gameResult.keep
    };

    const numberCombination = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [6, 4, 2], [8, 4, 0]]
    const updateField = (index) => {
        const newBoard = [...board];
        if (newBoard[index].symbol === "") {
            const oldTurn = turn
            if (turn.endsWith("X")) {
                newBoard[index].symbol = "X";
                setTurn("O")
            } else if (turn.endsWith("O")) {
                newBoard[index].symbol = "O";
                setTurn("X")
            }
            setBoard(newBoard)

            for (let i = 0; i < numberCombination.length; i++) {
                if (checkBoard(oldTurn, numberCombination[i]) === gameResult.win) {
                    setText(oldTurn + " won the game")
                    if (oldTurn === "X") {
                        setScoreX(scoreX + 1)
                    } else if (oldTurn === "O") {
                        setScoreO(scoreO + 1)
                    }
                    clearBoard()
                    break
                } else if (checkBoard(oldTurn, numberCombination[i]) === gameResult.draw) {
                    setText("Draw")
                    clearBoard()
                    break
                }
            }
        }
    };

    const fields = board.map(field => (
        <Field onClick={() => updateField(field.id)} key={field.id}>{field.symbol}</Field>));
    return (
        <>
            <StyledGameBoard>
                <ScoreBoard>
                    <span> Score X: {scoreX}</span>
                    <span> {turn}'s Turn</span>
                    <span>Score O: {scoreO} </span>
                </ScoreBoard>
                <TicTacToeWrapper>
                    {fields}
                </TicTacToeWrapper>
                <StatusText> {statusText} </StatusText>
            </StyledGameBoard>
        </>
    );
};
