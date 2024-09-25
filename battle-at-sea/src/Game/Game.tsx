import React, { useState } from "react";
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'
import Board from '../Boad/Board';
import Status from "../BattleReport/BattleReport";
import Instructions from "../Instructions/Instructions";
import fleet from "../fleet";
import board from "../board";

const Game: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const playersBattleReport = [
      {
      playerNumber: '1',
      fleetCount: 0,
      hitCount: 0,
      missCount: 0,
      opponentShipSunkCount: 0,
      fleet,
      board,
      selectedGridItems: [] as string[][]
   },
    {
      playerNumber: '2',
      fleetCount: 0,
      hitCount: 0,
      missCount: 0,
      opponentShipSunkCount: 0,
      fleet,
      board,
      selectedGridItems: [] as string[][]
    }
  ]

  const handleClick = ()=> {
    setIsGameStarted(!isGameStarted)
  }

  return (
    <div>
      <GlobalStyles />
      <Heading>Battle-At-Sea</Heading>
      <Main>
        <Board playersBattleReport={playersBattleReport[0]} isGameStarted={isGameStarted}/>
        <Status />  
        <Board playersBattleReport={playersBattleReport[1]} isGameStarted={isGameStarted}/>    
      </Main>
      <ButtonContainer>
        <StartGameButton onClick={handleClick} type="button">Start Battle</StartGameButton> 
      </ButtonContainer>
      <Instructions />
    </div>
  );
}

export default Game;

/*  Styles  */

const Heading = styled.h1`
	text-align: center;
	font-family: 'Press Start 2P', cursive;
	color: white;
	border: thick black ridge;
	padding: 20px;
	background-color: rgb(102, 102, 102);
`;

const Main = styled.main`
	display: flex;
	justify-content: space-evenly;
`;

const GlobalStyles = createGlobalStyle`
body {
	background-color: rgb(69,69,69);
}`

const ButtonContainer = styled.div`
  position: relative;
`;
const StartGameButton = styled.button`
    display: block;
    position: fixed;
    font-size: 10px; 
    line-height: 10px; 
    padding: 12px; 
    font-family: 'Press Start 2P', cursive; 
    background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); 
    box-shadow: rgb(0, 0, 0) 5px 5px 25px 5px; 
    border: 1px solid rgb(28, 110, 164); 
    margin-left: 45%;
    margin-top: -5%;

    &:hover {
    background: #1C6EA4;
    cursor: pointer;
    }

    &:active {
    background: #144E75;
    }
`;
