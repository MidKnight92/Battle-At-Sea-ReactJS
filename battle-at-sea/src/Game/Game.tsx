import React from "react";
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'
import Board from '../Boad/Board';
import Status from "../Status/Status";

const Game: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Heading>Battle-At-Sea</Heading>
      <Main>
        <Board playerNumber="1"/>
        <Status />  
        <Board playerNumber="2"/>    
      </Main>
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