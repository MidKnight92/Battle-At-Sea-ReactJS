import React, { ReactElement, useState } from "react";
import { styled } from "styled-components";
import useGameStore from "../store/gameStore";
import { GameStatus } from "../app/shared/model";
import { battlingInstructions, generalInstructions, shipInstructions } from "./instructionText";

const deploymentInstructions: Map<GameStatus, string> = new Map([
  [GameStatus.DEPLOYING_DESTROYER, shipInstructions[0]],
  [GameStatus.DEPLOYING_CRUISER, shipInstructions[1]],
  [GameStatus.DEPLOYING_SUBMARINE, shipInstructions[2]],
  [GameStatus.DEPLOYING_BATTLESHIP, shipInstructions[3]],
  [GameStatus.DEPLOYING_AIRCRAFT_CARRIER, shipInstructions[4]],
]);

const Instructions: React.FC = (): ReactElement => {
  const [isInstructionsDisplayed, setInstrucionsDisplayed] = useState(false);
  const { gameStatus } = useGameStore();
  const getFullGameInstructions = (): ReactElement => (
    <>
      {isInstructionsDisplayed && (
        <InstructionText>{generalInstructions}</InstructionText>
      )}
      <InstructionLink
        onClick={() => setInstrucionsDisplayed(!isInstructionsDisplayed)}
      >
        {isInstructionsDisplayed ? "Close Instructions" : "Instructions"}
      </InstructionLink>
    </>
  );

  return gameStatus === GameStatus.BATTLING ? (
    <InstructionText>{battlingInstructions}</InstructionText>
  ) : gameStatus === GameStatus.NOT_STARTED ||
    gameStatus === GameStatus.OVER ? (
    getFullGameInstructions()
  ) : (
    <InstructionText>{deploymentInstructions.get(gameStatus)}</InstructionText>
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
