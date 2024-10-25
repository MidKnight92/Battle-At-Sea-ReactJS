import React, { ReactElement, useRef, useState } from "react";
import { styled } from "styled-components";
import { GameStatus, IPlayer, Player, Ship } from "../app/shared/model";
import useGameStore from "../store/gameStore";
import initialBoard from "../board";
import fleet from "../fleet";

const LETTER_COORDINATES: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
];
const NUMBER_COORDINATES: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SHIP_KEYS: string[] = Object.keys(fleet);

const Board: React.FC<IPlayer> = ({ playerCode }): ReactElement => {
  const assignedPlayerBoard: Player = playerCode;
  const [board, setBoard] = useState(initialBoard);
  const shipIndex = useRef(0);
  const { activePlayer, changeActivePlayer, gameStatus, changeGameStatus } =
    useGameStore();

  const gridNumbers = NUMBER_COORDINATES.map(
    (number: number): ReactElement => (
      <GridNumber key={`gridNumber-${number}`}>{number}</GridNumber>
    )
  );

  const gridLetters = LETTER_COORDINATES.map(
    (letter: string): ReactElement => (
      <GridLetter key={`gridLetter-${letter}`}>{letter}</GridLetter>
    )
  );

  const addShipToGrid = (
    selectedRow: number,
    selectedColumn: number,
    ship: Ship
  ): void => {
    if (!board[selectedRow][selectedColumn]) {
      const updatedBoard = board.map((row, rowIndex) => {
        if (rowIndex === selectedRow) {
          return row.map((column, columnIndex) => {
            if (columnIndex === selectedColumn) {
              const newRow = [...row];
              return (newRow[columnIndex] = ship);
            } else {
              return column;
            }
          });
        } else {
          return row;
        }
      });
      setBoard(updatedBoard);
    }
  };

  const deployFleet = (rowIndex: number, columnIndex: number): void => {
    console.log("deploying");
    addShipToGrid(rowIndex, columnIndex, "B" as Ship);
  };

  const battling = (rowIndex: number, columnIndex: number): void => {
    console.log(rowIndex, columnIndex);
  };

  const handleGridItemClick = (rowIndex: number, columnIndex: number): void => {
    switch (gameStatus) {
      case GameStatus.BATTLING:
        activePlayer !== assignedPlayerBoard && battling(rowIndex, columnIndex);
        break;
      case GameStatus.DEPLOYING:
        activePlayer === assignedPlayerBoard &&
          deployFleet(rowIndex, columnIndex);
    }
  };

  const renderCells = (rowIndex: number): ReactElement[] =>
    NUMBER_COORDINATES.map((_, columnIndex: number) => (
      <GridItem
        key={`${rowIndex}-${columnIndex}`}
        onClick={() => handleGridItemClick(rowIndex, columnIndex)}
      ></GridItem>
    ));

  return (
    <div>
      <PlayerHeader>
        Player {assignedPlayerBoard === Player.PLAYER_ONE ? "One" : "Two"} Board
      </PlayerHeader>
      <BattleGrid>
        {gridLetters.map((gridLetter, rowIndex) => (
          <React.Fragment key={`${gridLetter}-${rowIndex}`}>
            {gridLetter}
            {renderCells(rowIndex)}
          </React.Fragment>
        ))}
        <EmptySpace />
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
