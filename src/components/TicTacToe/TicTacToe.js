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
`

const StatusText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  width: 300px;
  border: solid black 3px;
  background-color: #dddddd;
`

const ScoreBoard = styled.div`
  display: flex;
  font-size: 18px;
  width: 300px;
  border: solid black 3px;
  background-color: #dddddd;
  align-items: center;
`

const ScoreKeeper = styled.div`
  flex: 1;
  justify-content: center;
  display:flex;
`

const TicTacToeWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: #1b1e21;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const SimpleModeButton = styled.div`
  border-bottom-right-radius: 10px;
  border: solid black 3px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  flex: 1;
  background-color: #d6d8d9;
`

const SimpleResetButton = styled.div`
  border-bottom-left-radius: 10px;
  border: solid black 3px;
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 20px;
  background-color: #d6d8d9;
`

const ButtonWrapper = styled.div`
  width: 300px;
  display: flex;
  height: 35px;
`
const gameResult = {
    win: "win",
    draw: "draw",
    keep: "keep"
};

const gameMode = {
    AI: "PvE",
    PLAYER: "PvP"
};

export const TicTacToe = () => {
    const initialBoard = [{"id": 0, "symbol": ""}, {"id": 1, "symbol": ""}, {"id": 2, "symbol": ""},
        {"id": 3, "symbol": ""}, {"id": 4, "symbol": ""}, {"id": 5, "symbol": ""},
        {"id": 6, "symbol": ""}, {"id": 7, "symbol": ""}, {"id": 8, "symbol": ""}]
    const winningFieldIndexes = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [6, 4, 2], [8, 4, 0]]

    const [scoreO, setScoreO] = useState(0)
    const [mode, setMode] = useState(gameMode.PLAYER)
    const [scoreX, setScoreX] = useState(0)
    const [turn, setTurn] = useState("X")
    const [statusText, setText] = useState("Let us Start!")
    const [board, setBoard] = useState([...initialBoard]);


    const clearBoard = () => {
        setBoard([...initialBoard]);
    }

    const checkBoard = (symbol, winningFieldIndexes) => {
        if (board[winningFieldIndexes[0]].symbol === symbol &&
            board[winningFieldIndexes[1]].symbol === symbol &&
            board[winningFieldIndexes[2]].symbol === symbol) {
            return gameResult.win
        } else if (board.filter(field => field.symbol === '').length <= 0) {
            return gameResult.draw
        }
        return gameResult.keep
    };

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
            for (let i = 0; i < winningFieldIndexes.length; i++) {
                if (checkBoard(oldTurn, winningFieldIndexes[i]) === gameResult.win) {
                    setText(oldTurn + " won the game")
                    if (oldTurn === "X") {
                        setScoreX(scoreX + 1)
                    } else if (oldTurn === "O") {
                        setScoreO(scoreO + 1)
                    }
                    clearBoard()
                    break
                } else if (checkBoard(oldTurn, winningFieldIndexes[i]) === gameResult.draw) {
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
                    <ScoreKeeper> <b>X:</b> {scoreX}</ScoreKeeper>
                    <ScoreKeeper/>
                    <ScoreKeeper> <b>O:</b> {scoreO} </ScoreKeeper>
                </ScoreBoard>
                <TicTacToeWrapper>
                    {fields}
                </TicTacToeWrapper>
                <StatusText> {turn}'s Turn</StatusText>
                <StatusText> {statusText} </StatusText>
                <ButtonWrapper>
                    <SimpleResetButton> Reset </SimpleResetButton>
                    <SimpleModeButton> {mode === gameMode.PLAYER ? "Switch to PvE" : "Switch to PvP"}</SimpleModeButton>
                </ButtonWrapper>
            </StyledGameBoard>
        </>
    );
};
