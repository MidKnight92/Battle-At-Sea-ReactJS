import React, { ReactElement, useRef, useState } from "react";
import { styled } from "styled-components";
import {
  Direction,
  GameStatus,
  IPlayer,
  Player,
  TOTAL_NUMBER_OF_SHIPS,
} from "../app/shared/model";
import useGameStore from "../store/gameStore";
import initialFleet from "../fleet";
import {
  NUMBER_COORDINATES,
  LETTER_COORDINATES,
  initalBoard,
  LAST_CELL,
  FIRST_CELL,
} from "./boardConstants";

const shipMap: Map<GameStatus, number> = new Map([
  [GameStatus.DEPLOYING_DESTROYER, 0],
  [GameStatus.DEPLOYING_CRUISER, 1],
  [GameStatus.DEPLOYING_SUBMARINE, 2],
  [GameStatus.DEPLOYING_BATTLESHIP, 3],
  [GameStatus.DEPLOYING_AIRCRAFT_CARRIER, 4],
]);

const gridNumbers = NUMBER_COORDINATES.map(
  (number: number): ReactElement => (
    <GridNumber key={number}>{number}</GridNumber>
  )
);

const gridLetters = LETTER_COORDINATES.map(
  (letter: string): ReactElement => (
    <GridLetter key={letter}>{letter}</GridLetter>
  )
);

const Board: React.FC<IPlayer> = ({ playerCode }): ReactElement => {
  const assignedPlayerBoard: Player = playerCode;
  const [board, setBoard] = useState(initalBoard);
  const [fleet, setFleet] = useState(initialFleet);
  const shipIndexRef = useRef(0);
  const deployedShipCount = shipIndexRef.current;
  const { activePlayer, changeActivePlayer, gameStatus, changeGameStatus } =
    useGameStore();

  const isPlayerDeployingLastShip = (): boolean =>
    deployedShipCount === fleet.length;

  const isShipLengthMeet = (): boolean => {
    const { numberOfCellsSelected, shipLength } = fleet[deployedShipCount];
    return shipLength === numberOfCellsSelected;
  };

  const startBattle = (): void => {
    changeActivePlayer();
    changeGameStatus(GameStatus.BATTLING);
  };

  const isCellAvailable = (rowIndex: number, columnIndex: number): boolean =>
    board[rowIndex][columnIndex] === null;

  const isInbound = (
    rowIndex: number,
    columnIndex: number,
    shipLength: number,
    direction: string
  ): boolean => {
    switch (direction) {
      case Direction.HORIZONTAL_POSITIVE:
        return columnIndex + shipLength - 1 <= LAST_CELL;
      case Direction.HORIZONTAL_NEGATIVE:
        return columnIndex - shipLength - 1 >= FIRST_CELL;
      case Direction.VERTICAL_POSITIVE:
        return rowIndex - shipLength - 1 >= FIRST_CELL;
      case Direction.VERTICAL_NEGATIVE:
        return rowIndex + shipLength - 1 <= LAST_CELL;
      default:
        return false;
    }
  };

  const traverseAxis = (
    rowIndex: number,
    columnIndex: number,
    shipLength: number,
    direction: Direction
  ): boolean => {
    for (let i = 1; i < shipLength; i++) {
      const newRowIndex =
        direction === Direction.VERTICAL_POSITIVE
          ? rowIndex - i
          : rowIndex + (direction === Direction.VERTICAL_NEGATIVE ? i : 0);
      const newColIndex =
        direction === Direction.HORIZONTAL_POSITIVE
          ? columnIndex + i
          : columnIndex - (direction === Direction.HORIZONTAL_NEGATIVE ? i : 0);

      if (!isCellAvailable(newRowIndex, newColIndex)) return false;
    }

    return true;
  };

  const areCellsAvailable = (
    rowIndex: number,
    columnIndex: number,
    shipLength: number,
    direction: Direction
  ): boolean => {
    return (
      isInbound(rowIndex, columnIndex, shipLength, direction) &&
      traverseAxis(rowIndex, columnIndex, shipLength, direction)
    );
  };

  const areAdjoiningCellsAvaliable = (
    rowIndex: number,
    columnIndex: number
  ): boolean => {
    const shipLength: number = fleet[deployedShipCount].shipLength - 1;
    return (
      areCellsAvailable(
        rowIndex,
        columnIndex,
        shipLength,
        Direction.HORIZONTAL_POSITIVE
      ) ||
      areCellsAvailable(
        rowIndex,
        columnIndex,
        shipLength,
        Direction.HORIZONTAL_NEGATIVE
      ) ||
      areCellsAvailable(
        rowIndex,
        columnIndex,
        shipLength,
        Direction.VERTICAL_POSITIVE
      ) ||
      areCellsAvailable(
        rowIndex,
        columnIndex,
        shipLength,
        Direction.VERTICAL_NEGATIVE
      )
    );
  };

  const isCellSelectionValid = (rowIndex: number, columnIndex: number) =>
    isCellAvailable(rowIndex, columnIndex) &&
    areAdjoiningCellsAvaliable(rowIndex, columnIndex);

  const readyToBeginBattle = (): boolean => {
    return (
      activePlayer === Player.PLAYER_TWO &&
      isPlayerDeployingLastShip() &&
      isShipLengthMeet()
    );
  };

  const setShip = (rowIndex: number, columnIndex: number) => {
    readyToBeginBattle() && startBattle();
  };

  const deployFleet = (rowIndex: number, columnIndex: number): void => {
    isCellSelectionValid(rowIndex, columnIndex) &&
      setShip(rowIndex, columnIndex);
  };

  const battling = (rowIndex: number, columnIndex: number): void => {
    console.log(rowIndex, columnIndex);
  };

  const handleCellClick = (rowIndex: number, columnIndex: number): void => {
    switch (gameStatus) {
      case GameStatus.NOT_STARTED:
      case GameStatus.OVER:
        return;
      case GameStatus.BATTLING:
        activePlayer !== assignedPlayerBoard && battling(rowIndex, columnIndex);
        break;
      default:
        activePlayer === assignedPlayerBoard &&
          deployFleet(rowIndex, columnIndex);
    }
  };

  const getPlayerBoardHeader = (): string => {
    const player: string =
      assignedPlayerBoard === Player.PLAYER_ONE ? "One" : "Two";
    return `Player ${player} Board`;
  };

  const renderCells = (rowIndex: number): ReactElement[] =>
    NUMBER_COORDINATES.map((_, columnIndex: number) => (
      <GridItem
        key={`${rowIndex}-${columnIndex}`}
        onClick={() => handleCellClick(rowIndex, columnIndex)}
      ></GridItem>
    ));

  return (
    <div>
      <PlayerHeader>
        {gameStatus === GameStatus.OVER ? "GAME OVER" : getPlayerBoardHeader()}
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
