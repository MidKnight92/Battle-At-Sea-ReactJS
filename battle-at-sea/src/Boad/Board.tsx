import React, { ReactElement, useRef, useState } from "react";
import { styled } from "styled-components";
import {
  GameStatus,
  IPlayer,
  Player,
  Ship,
  ShipStatus,
  TOTAL_NUMBER_OF_SHIPS,
} from "../app/shared/model";
import useGameStore from "../store/gameStore";
import initialFleet from "../fleet";
import {
  NUMBER_COORDINATES,
  LETTER_COORDINATES,
  initalBoard,
  Cell,
} from "./boardConstants";
import {
  isCellAvailable,
  isCellSelectionValid,
  isPlayerDeployingLastShip,
} from "./helperFunctions";

const Board: React.FC<IPlayer> = ({ playerCode }): ReactElement => {
  const assignedPlayerBoard: Player = playerCode;
  const boardRef = useRef<Cell[][]>(initalBoard);
  const board = boardRef.current;
  const [fleet, setFleet] = useState<ShipStatus[]>(initialFleet);
  const shipIndexRef = useRef<number>(0);
  const currentShip = shipIndexRef.current;
  const { activePlayer, changeActivePlayer, gameStatus, changeGameStatus } =
    useGameStore();

  // const isShipLengthMeet = (): boolean => {
  //   const { numberOfCellsSelected, shipLength } = fleet[currentShip];
  //   return shipLength === numberOfCellsSelected;
  // };

  // const readyToBeginBattle = (): boolean => {
  //   return (
  //     activePlayer === Player.PLAYER_TWO &&
  //     isPlayerDeployingLastShip(currentShip, TOTAL_NUMBER_OF_SHIPS) &&
  //     isShipLengthMeet()
  //   );
  // };

  // const startBattle = (): void => {
  //   changeActivePlayer();
  //   changeGameStatus(GameStatus.BATTLING);
  // };

  // const setShip = (rowIndex: number, columnIndex: number) => {
  //   board[rowIndex][columnIndex] = fleet[currentShip];
  //   setFleet([
  //     ...fleet,
  //     {
  //       ...fleet[currentShip],
  //       numberOfCellsSelected: fleet[currentShip].numberOfCellsSelected + 1,
  //     },
  //   ]);
  //   readyToBeginBattle() && startBattle();
  // };

  // const deployFleet = (
  //   board: null[][] | ShipStatus[][],
  //   rowIndex: number,
  //   columnIndex: number
  // ): void => {
  //   const shipLength: number = fleet[currentShip].shipLength - 1;

  //   isCellSelectionValid(board, rowIndex, columnIndex, shipLength) &&
  //     setShip(rowIndex, columnIndex);
  // };

  // const battling = (rowIndex: number, columnIndex: number): boolean =>
  //   !isCellAvailable(board, rowIndex, columnIndex);

  const handleCellClick = (rowIndex: number, columnIndex: number): void => {
    // switch (gameStatus) {
    //   case GameStatus.NOT_STARTED:
    //   case GameStatus.OVER:
    //     return;
    //   case GameStatus.BATTLING:
    //     activePlayer !== assignedPlayerBoard && battling(rowIndex, columnIndex);
    //     break;
    //   default:
    //     activePlayer === assignedPlayerBoard &&
    //       deployFleet(board, rowIndex, columnIndex);
    // }
  };

  return (
    <div>
      {/* Display Board Header */}
      <PlayerHeader>
        {gameStatus === GameStatus.OVER ? "GAME OVER" : assignedPlayerBoard === Player.PLAYER_ONE ? "Player One Board" : "Player Two Board"}
      </PlayerHeader>
      <BattleGrid>

        {/* Display Letter Coordinates */}
        {LETTER_COORDINATES.map((letter: string, rowIndex: number) => (
          <LetterCell key={letter} $gridRow={rowIndex}>
            {letter}
          </LetterCell>
        ))}

        {/* Clickable Cells */}
        {initalBoard.map((row: any[], rowIndex: number) => {
          return row.map((__, columnIndex: number) => (
            <GridItem
              key={`${rowIndex}-${columnIndex}`}
              $gridColumn={columnIndex}
              $gridRow={rowIndex}
              onClick={() => handleCellClick(rowIndex, columnIndex)}
            ></GridItem>
          ));
        })}

        {/* Display Number Coordinates */}
        {NUMBER_COORDINATES.map((number: number) => (
          <NumberCell key={number}>{number}</NumberCell>
        ))}
        
        <EmptySpace />
      </BattleGrid>
    </div>
  );
};

export default Board;


/*  Styles  */
const BattleGrid = styled.div`
  display: grid;
  grid-template-columns: auto repeat(10, auto);
  grid-template-rows: repeat(10, auto) auto;
  border: black ridge;
  margin-top: 50px;
`;

const GridItem = styled.button<{ $gridRow: number; $gridColumn: number }>`
  display: inline-block;
  background-color: rgb(0, 119, 190);
  border: black thin outset;
  padding: 15px;
  ${({ $gridRow }) => `grid-row: ${$gridRow + 1}`}
  ${({ $gridColumn }) => `grid-row: ${$gridColumn + 2}`}

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

const EmptySpace = styled.div`
  grid-column: 1;
  grid-row: 11;
  padding: 15px;
  background-color: rgb(102, 102, 102);
`;

const GridLabel = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: center;
  font-family: "Press Start 2P", cursive;
  background-color: rgb(102, 102, 102);
`;

const LetterCell = styled(GridLabel)<{ $gridRow: number }>`
  grid-column: 1;
  ${({ $gridRow }) => `grid-row: ${$gridRow + 1}`}
`;

const NumberCell = styled(GridLabel)`
  grid-row: 11;
`;
