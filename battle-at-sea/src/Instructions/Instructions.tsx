import React, { ReactElement, useState } from "react";
import { styled } from "styled-components";

const Instructions: React.FC = (): ReactElement => {
  const [isInstructionsDisplayed, setInstrucionsDisplayed] = useState(false);
  const instructions = (
    <InstructionText>
      Player 1 will place their fleet (5 ships) on their respective boards
      followed by Player 2. Once fleet is set Player 1 will click on Players 2
      grid then the players will swap turns.
    </InstructionText>
  );
  return (
    <>
      {isInstructionsDisplayed && { instructions }}
      <InstructionLink onClick={() => setInstrucionsDisplayed(!isInstructionsDisplayed)}>
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
