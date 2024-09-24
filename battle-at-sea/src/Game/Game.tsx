import React from "react";
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'
import Board from '../Boad/Board';
import Status from "../BattleReport/BattleReport";
import Instructions from "../Instructions/Instructions";
import fleet from "../fleet";
import board from "../board";

const Game: React.FC = () => {
  const playersBattleReport = [
      {
      playerNumber: '1',
      fleetCount: 0,
      hitCount: 0,
      missCount: 0,
      opponentShipSunkCount: 0,
      fleet,
      board,
      selectedGridItems: []
   },
    {
      playerNumber: '2',
      fleetCount: 0,
      hitCount: 0,
      missCount: 0,
      opponentShipSunkCount: 0,
      fleet,
      board,
      selectedGridItems: []
    }
  ]
  return (
    <div>
      <GlobalStyles />
      <Heading>Battle-At-Sea</Heading>
      <Main>
        <Board playersBattleReport={playersBattleReport[0]}/>
        <Status />  
        <Board playersBattleReport={playersBattleReport[1]}/>    
      </Main>
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
