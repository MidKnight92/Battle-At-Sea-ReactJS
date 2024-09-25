import React from "react";
import { styled } from "styled-components";

interface BoardProps {
	playersBattleReport: {
	  playerNumber: string;
	  fleetCount: number;
	  hitCount: number;
	  missCount: number;
	  opponentShipSunkCount: number;
	  fleet: {
		typeOfShip: string;
		length: number;
		letter: string;
		placed: boolean;
	  }[];
	  board: number[][];
	  selectedGridItems: string[][];
	};
  }


const Board: React.FC<BoardProps> = ({playersBattleReport}) => {
	const { playerNumber } = playersBattleReport;
	return (
		<div>
			<PlayerHeader>Player {playerNumber} Fleet</PlayerHeader>
			<BattleGrid>
				<Letter>A</Letter>
				<GridItem data-player={playerNumber} data-square="0-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="0-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="0-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="0-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="0-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="0-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="0-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="0-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="0-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="0-9"></GridItem>
				<Letter>B</Letter>
				<GridItem data-player={playerNumber} data-square="1-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="1-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="1-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="1-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="1-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="1-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="1-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="1-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="1-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="1-9"></GridItem>
				<Letter>C</Letter>
				<GridItem data-player={playerNumber} data-square="2-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="2-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="2-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="2-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="2-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="2-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="2-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="2-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="2-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="2-9"></GridItem>
				<Letter>D</Letter>
				<GridItem data-player={playerNumber} data-square="3-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="3-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="3-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="3-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="3-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="3-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="3-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="3-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="3-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="3-9"></GridItem>
				<Letter>E</Letter>
				<GridItem data-player={playerNumber} data-square="4-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="4-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="4-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="4-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="4-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="4-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="4-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="4-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="4-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="4-9"></GridItem>
				<Letter>F</Letter>
				<GridItem data-player={playerNumber} data-square="5-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="5-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="5-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="5-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="5-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="5-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="5-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="5-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="5-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="5-9"></GridItem>
				<Letter>G</Letter>
				<GridItem data-player={playerNumber} data-square="6-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="6-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="6-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="6-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="6-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="6-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="6-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="6-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="6-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="6-9"></GridItem>
				<Letter>H</Letter>
				<GridItem data-player={playerNumber} data-square="7-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="7-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="7-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="7-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="7-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="7-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="7-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="7-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="7-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="7-9"></GridItem>
				<Letter>I</Letter>
				<GridItem data-player={playerNumber} data-square="8-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="8-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="8-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="8-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="8-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="8-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="8-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="8-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="8-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="8-9"></GridItem>
				<Letter>J</Letter>
				<GridItem data-player={playerNumber} data-square="9-0"></GridItem>
				<GridItem data-player={playerNumber} data-square="9-1"></GridItem>
				<GridItem data-player={playerNumber} data-square="9-2"></GridItem>
				<GridItem data-player={playerNumber} data-square="9-3"></GridItem>
				<GridItem data-player={playerNumber} data-square="9-4"></GridItem>
				<GridItem data-player={playerNumber} data-square="9-5"></GridItem>
				<GridItem data-player={playerNumber} data-square="9-6"></GridItem>
				<GridItem data-player={playerNumber} data-square="9-7"></GridItem>
				<GridItem data-player={playerNumber} data-square="9-8"></GridItem>
				<GridItem data-player={playerNumber} data-square="9-9"></GridItem>
				<Letter></Letter>
				<Letter>1</Letter>
				<Letter>2</Letter>
				<Letter>3</Letter>
				<Letter>4</Letter>
				<Letter>5</Letter>
				<Letter>6</Letter>
				<Letter>7</Letter>
				<Letter>8</Letter>
				<Letter>9</Letter>
				<Letter>10</Letter>
			</BattleGrid>
		</div>
	);
}

export default Board;

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
	-moz-box-shadow:    inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow:         inset 0 0 10px #000000;
}

&:active {
	-moz-box-shadow:    inset 0 0 10px #ffffff;
    -webkit-box-shadow: inset 0 0 10px #ffffff;
    box-shadow:         inset 0 0 10px #ffffff;
}`;

const PlayerHeader = styled.h2`
	margin-left: 100px;
`;

const Letter = styled.p`
	display: block;
	margin: 0;
	padding: 15px;
	text-align: center;
	font-family: 'Press Start 2P', cursive;
	background-color: rgb(102, 102, 102);
`;