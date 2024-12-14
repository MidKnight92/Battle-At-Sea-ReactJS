import React, { ReactElement, useState } from "react";
import { styled } from "styled-components";
import useGameStore from "../store/gameStore";
import { GameStatus, Player } from "../app/shared/model";
import initialFleet from "../fleet";

const Instructions: React.FC = (): ReactElement => {
  const [isInstructionsDisplayed, setInstrucionsDisplayed] = useState<boolean>(false);
  const { gameStatus, activePlayer } = useGameStore();

  const shipInstructions: string[] = initialFleet.map(
    ({ shipLength, typeOfShip, numberOfCellsSelected }) =>
      `Player ${activePlayer === Player.PLAYER_ONE ? "One" : "Two"} select ${
        shipLength - numberOfCellsSelected
      } adjacent cells in either the vertical or horizontal direction to place the ${typeOfShip} on your assigned board.`
  );

  const deploymentInstructions: Map<GameStatus, string> = new Map([
    [GameStatus.DEPLOYING_DESTROYER, shipInstructions[0]],
    [GameStatus.DEPLOYING_CRUISER, shipInstructions[1]],
    [GameStatus.DEPLOYING_SUBMARINE, shipInstructions[2]],
    [GameStatus.DEPLOYING_BATTLESHIP, shipInstructions[3]],
    [GameStatus.DEPLOYING_AIRCRAFT_CARRIER, shipInstructions[4]],
  ]);

  if (gameStatus === GameStatus.BATTLING) {
    return (
      <InstructionText>
        Select a cell on your opponent's grid. Red indicates a hit, while green
        indicates a miss.
      </InstructionText>
    );
  } else if (
    gameStatus === GameStatus.NOT_STARTED ||
    gameStatus === GameStatus.OVER
  ) {
    return (
      <>
        {isInstructionsDisplayed && (
          <InstructionText>
            Players will deploy their fleet by selecting cells on their
            respective boards. Each fleet consists of 5 ships. Players must
            select adjacent cells either vertically or horizontally to match the
            required length of each ship for deployment. Non-adjacent cell
            selections will be ignored. After deploying their fleets, the battle
            will commence, with players taking turns selecting individual cells
            on their opponent's board. Each selection results in either a hit
            (red) or a miss (green), and all results will be reflected in the
            Battle Report. A player must sink their opponent's entire fleet to
            win. Player 1 starts the deployment and battling stage.
          </InstructionText>
        )}
        <InstructionLink
          onClick={() => setInstrucionsDisplayed(!isInstructionsDisplayed)}
        >
          {isInstructionsDisplayed ? "Close Instructions" : "Instructions"}
        </InstructionLink>
      </>
    );
  } else {
    return (
      <InstructionText>
        {deploymentInstructions.get(gameStatus)}
      </InstructionText>
    );
  }
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
