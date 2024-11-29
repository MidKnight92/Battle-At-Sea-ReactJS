import React, { ReactElement, useRef, useState } from "react";
import { styled } from "styled-components";
import {
  GameStatus,
  IPlayer,
  Player,
  ShipStats,
  TOTAL_NUMBER_OF_SHIPS,
} from "../app/shared/model";
import useGameStore from "../store/gameStore";
import initialFleet from "../fleet";
import {
  NUMBER_COORDINATES,
  LETTER_COORDINATES,
  initalBoard,
} from "./boardConstants";
import {
  isCellAvailable,
  isCellSelectionValid,
  isPlayerDeployingLastShip,
} from "./helperFunctions";

const shipMap: Map<GameStatus, number> = new Map([
  [GameStatus.DEPLOYING_DESTROYER, 0],
  [GameStatus.DEPLOYING_CRUISER, 1],
  [GameStatus.DEPLOYING_SUBMARINE, 2],
  [GameStatus.DEPLOYING_BATTLESHIP, 3],
  [GameStatus.DEPLOYING_AIRCRAFT_CARRIER, 4],
]);

const Board: React.FC<IPlayer> = ({ playerCode }): ReactElement => {
  const assignedPlayerBoard: Player = playerCode;
  const boardRef = useRef<null[][] | ShipStats[][]>(initalBoard);
  const board = boardRef.current;
  const [fleet, setFleet] = useState<ShipStats[]>(initialFleet);
  const shipIndexRef = useRef<number>(0);
  const currentShip = shipIndexRef.current;
  const { activePlayer, changeActivePlayer, gameStatus, changeGameStatus } =
    useGameStore();

  const isShipLengthMeet = (): boolean => {
    const { numberOfCellsSelected, shipLength } = fleet[currentShip];
    return shipLength === numberOfCellsSelected;
  };

  const readyToBeginBattle = (): boolean => {
    return (
      activePlayer === Player.PLAYER_TWO &&
      isPlayerDeployingLastShip(currentShip, TOTAL_NUMBER_OF_SHIPS) &&
      isShipLengthMeet()
    );
  };

  const startBattle = (): void => {
    changeActivePlayer();
    changeGameStatus(GameStatus.BATTLING);
  };

  const setShip = (rowIndex: number, columnIndex: number) => {
    board[rowIndex][columnIndex] = fleet[currentShip];
    setFleet([
      ...fleet,
      {
        ...fleet[currentShip],
        numberOfCellsSelected: fleet[currentShip].numberOfCellsSelected + 1,
      },
    ]);
    readyToBeginBattle() && startBattle();
  };

  const deployFleet = (
    board: null[][] | ShipStats[][],
    rowIndex: number,
    columnIndex: number
  ): void => {
    const shipLength: number = fleet[currentShip].shipLength - 1;

    isCellSelectionValid(board, rowIndex, columnIndex, shipLength) &&
      setShip(rowIndex, columnIndex);
  };

  const battling = (rowIndex: number, columnIndex: number): boolean =>
    !isCellAvailable(board, rowIndex, columnIndex);

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
          deployFleet(board, rowIndex, columnIndex);
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
  font-family: "Press Start 2P", cursive;
  font-size: 100%;
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
