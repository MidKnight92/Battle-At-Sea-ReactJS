import React, { ReactElement, useState } from "react";
import { styled } from "styled-components";
import useGameStore from "../store/gameStore";
import { GameStatus, Ship } from "../app/shared/model";
import initialFleet from "../fleet";


const deploymentInstructions = initialFleet.map(
  ({ length, typeOfShip }) =>
    `Select ${length} adjacent cells in either the vertical or horizontal direction to place the ${typeOfShip === Ship.Aircraft_Carrier ? 'Aircraft Carrier': typeOfShip }.`
);

const generalInstructions = [
  "Players will deploy their fleet by selecting cells on their respective boards. There are 5 ships in each fleet. Players must select adjacent cells in either the vertical or horizontal direction to the required length of each respective ship in order for the ship to be deployed. Nonadjacent cell selections will be ignored during deployment. Once players have finished deploying their fleet the battle will begin. Players will take turns selecting individual cells on their opponents board. Eack selection will result in either a hit or miss. The cell will turn either green (miss) or red (hit). All results will be reflected on the Battle Report. Player must sink their opponents entire fleet to win. Player 1 starts the deploymet and battling stage.",
  "Select a cell on your opponent's grid. Red indicates a hit and green indicates a miss",
];

const Instructions: React.FC = (): ReactElement => {
  const [isInstructionsDisplayed, setInstrucionsDisplayed] = useState(false);
  const { gameStatus } = useGameStore();
  const shipIndex = 0; // Add to store

  return gameStatus === GameStatus.DEPLOYING ? (
    <InstructionText>{deploymentInstructions[shipIndex]}</InstructionText>
  ) : gameStatus === GameStatus.BATTLING ? (
    <InstructionText>{generalInstructions[1]}</InstructionText>
  ) : (
    <>
      {isInstructionsDisplayed && (
        <InstructionText>{generalInstructions[0]}</InstructionText>
      )}
      <InstructionLink
        onClick={() => setInstrucionsDisplayed(!isInstructionsDisplayed)}
      >
        {isInstructionsDisplayed ? "Close Instructions" : "Instructions"}
      </InstructionLink>
    </>
  );
};

export default Instructions;

const InstructionText = styled.p`
  margin-top: 45px;
  margin-left: 30px;
  text-align: center;
  font-size: 8px;
  font-family: "Press Start 2P", cursive;
  color: white;
  padding: 10px;
`;

const InstructionLink = styled.a`
  display: inline-block;
  margin-top: 45px;
  margin-left: 30px;
  text-align: left;
  font-size: 8px;
  font-family: "Press Start 2P", cursive;
  color: white;
  text-decoration: underline;
  padding: 10px;

  &:hover {
    cursor: pointer;
    color: black;
    text-decoration: underline;
  }
`;
