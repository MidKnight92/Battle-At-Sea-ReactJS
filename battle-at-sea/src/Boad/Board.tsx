import React, { ReactElement } from "react";
import { styled } from "styled-components";

interface BoardProps {
  playersBattleReport: {
    playerNumber: string;
    fleetCount: number;
    hitCount: number;
    missCount: number;
    opponentShipSunkCount: number;
    fleet: {
      typeOfShip: string;
      length: number;
      letter: string;
      placed: boolean;
    }[];
    board: number[][];
    selectedGridItems: string[][];
  };
  isGameStarted: boolean;
}

const Board: React.FC<BoardProps> = ({
  playersBattleReport,
  isGameStarted,
}) => {
  const { playerNumber } = playersBattleReport;
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const gridNumbers = numbers.map(
    (number: string): ReactElement => (
      <GridNumber key={`gridNumber-${number}`}>{number}</GridNumber>
    )
  );

  const gridLetters = letters.map(
    (letter: string): ReactElement => (
      <GridLetter key={letter}>{letter}</GridLetter>
    )
  );

  const handleGridItemClick = (
    activePlayerBoardNumber: string,
    index1: number,
    index2: number
  ): void => {
    const activePlayer = "1"; // TODO: Will be removed in future
    activePlayer !== activePlayerBoardNumber && console.log(index1, index2);
  };

  const gridItems = (boardNumber: string, index1: number): ReactElement[] =>
    numbers.map((_, index2: number) => (
      <GridItem
        key={`${index1}-${index2}`}
        onClick={() => handleGridItemClick(boardNumber, index1, index2)}
      ></GridItem>
    ));

  return (
    <div key={`div-${playerNumber}`}>
      <PlayerHeader key={`playerHeader-${playerNumber}`}>
        Player {playerNumber} Fleet
      </PlayerHeader>
      <BattleGrid key={`battle-grid-${playerNumber}`}>
        {gridLetters.map((gridLetter, index1) => (
          <React.Fragment key={index1}>
            {gridLetter}
            {gridItems(playerNumber, index1)}
          </React.Fragment>
        ))}
        <EmptySpace key="blank"></EmptySpace>
        {gridNumbers}
      </BattleGrid>
    </div>
  );
};

export default Board;

/*  Styles  */

const BattleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(11, auto);
  border: black ridge;
  margin-top: 50px;
`;

const GridItem = styled.button`
  display: bock;
  background-color: rgb(0, 119, 190);
  border: black thin outset;
  padding: 15px;

  &:hover {
    -moz-box-shadow: inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow: inset 0 0 10px #000000;
  }

  &:active {
    -moz-box-shadow: inset 0 0 10px #ffffff;
    -webkit-box-shadow: inset 0 0 10px #ffffff;
    box-shadow: inset 0 0 10px #ffffff;
  }
`;

const PlayerHeader = styled.h2`
  margin-left: 100px;
`;

const GridLetter = styled.p`
  display: block;
  margin: 0;
  padding: 15px;
  text-align: center;
  font-family: "Press Start 2P", cursive;
  background-color: rgb(102, 102, 102);
`;

const GridNumber = GridLetter;
const EmptySpace = GridLetter;
