import React, { ReactElement, useState } from "react";
import { styled } from "styled-components";
import { IPlayer } from "../app/shared/model";
import useGameStore from "../store/gameStore";
import board from "../board";

const letterCoordinates = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const numberCoordinates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shipsInFleet = 5;

const Board: React.FC<IPlayer> = ({ player }): ReactElement => {
  const boardCode = player;
  const [playerBoard, setPlayerBoard] = useState(board);
  const [isBattling, setIsBattling] = useState(false);
  const { isBattleStarted, activePlayer } = useGameStore();

  const gridNumbers = numberCoordinates.map(
    (number: number): ReactElement => (
      <GridNumber key={`gridNumber-${number}`}>{number}</GridNumber>
    )
  );

  const gridLetters = letterCoordinates.map(
    (letter: string): ReactElement => (
      <GridLetter key={`gridLetter-${letter}`}>{letter}</GridLetter>
    )
  );

  const setFleet = (index1: number, index2: number): void => {
    console.log(index1, index2);
    // playersBattleReport.fleet.forEach(
    //   (ship) =>
    //     !ship.placed && console.log("to be set")
    //     // check that each ship is placed at the correct length use String.fromCharCode(letter); to check that ship will fit vertically
    // );
  };

  const handleGridItemClick = (index1: number, index2: number): void => {
    if (!isBattleStarted) return;
    // console.log(playerBoard, index1, index2);
    if (isBattling) {
      activePlayer !== boardCode && console.log(index1, index2);
    } else {
      activePlayer === boardCode && setFleet(index1, index2);
    }
  };

  const cells = (index1: number): ReactElement[] =>
    numberCoordinates.map((_, index2: number) => (
      <GridItem
        key={`${index1}-${index2}`}
        onClick={() => handleGridItemClick(index1, index2)}
      ></GridItem>
    ));

  return (
    <div>
      <PlayerHeader>
        Player {boardCode === "p1" ? "One" : "Two"} Board
      </PlayerHeader>
      <BattleGrid>
        {gridLetters.map((gridLetter, index1) => (
          <React.Fragment key={`${gridLetter}-${index1}`}>
            {gridLetter}
            {cells(index1)}
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
