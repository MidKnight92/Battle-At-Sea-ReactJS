import React from "react";
import { styled } from "styled-components";

interface BoardProps {
	playerNumber: string;
}

const Board: React.FC<BoardProps> = ({playerNumber}) => {
    return (
		<div>
			<PlayerHeader>Player {playerNumber} Fleet</PlayerHeader>
			<BattleGrid>
				<Letter>A</Letter>
				<div className="grid-item" data-player='p1' data-square="0-0"></div>
				<div className="grid-item" data-player='p1' data-square="0-1"></div>
				<div className="grid-item" data-player='p1' data-square="0-2"></div>
				<div className="grid-item" data-player='p1' data-square="0-3"></div>
				<div className="grid-item" data-player='p1' data-square="0-4"></div>
				<div className="grid-item" data-player='p1' data-square="0-5"></div>
				<div className="grid-item" data-player='p1' data-square="0-6"></div>
				<div className="grid-item" data-player='p1' data-square="0-7"></div>
				<div className="grid-item" data-player='p1' data-square="0-8"></div>
				<div className="grid-item" data-player='p1' data-square="0-9"></div>
				<Letter>B</Letter> 
				<div className="grid-item" data-player='p1' data-square="1-0"></div>
				<div className="grid-item" data-player='p1' data-square="1-1"></div>
				<div className="grid-item" data-player='p1' data-square="1-2"></div>
				<div className="grid-item" data-player='p1' data-square="1-3"></div>
				<div className="grid-item" data-player='p1' data-square="1-4"></div>
				<div className="grid-item" data-player='p1' data-square="1-5"></div>
				<div className="grid-item" data-player='p1' data-square="1-6"></div>
				<div className="grid-item" data-player='p1' data-square="1-7"></div>
				<div className="grid-item" data-player='p1' data-square="1-8"></div>
				<div className="grid-item" data-player='p1' data-square="1-9"></div>
				<Letter>C</Letter>
				<div className="grid-item" data-player='p1' data-square="2-0"></div>
				<div className="grid-item" data-player='p1' data-square="2-1"></div>
				<div className="grid-item" data-player='p1' data-square="2-2"></div>
				<div className="grid-item" data-player='p1' data-square="2-3"></div>
				<div className="grid-item" data-player='p1' data-square="2-4"></div>
				<div className="grid-item" data-player='p1' data-square="2-5"></div>
				<div className="grid-item" data-player='p1' data-square="2-6"></div>
				<div className="grid-item" data-player='p1' data-square="2-7"></div>
				<div className="grid-item" data-player='p1' data-square="2-8"></div>
				<div className="grid-item" data-player='p1'  data-square="2-9"></div>
				<Letter>D</Letter>
				<div className="grid-item" data-player='p1' data-square="3-0"></div>
				<div className="grid-item" data-player='p1' data-square="3-1"></div>
				<div className="grid-item" data-player='p1' data-square="3-2"></div>
				<div className="grid-item" data-player='p1' data-square="3-3"></div>
				<div className="grid-item" data-player='p1' data-square="3-4"></div>
				<div className="grid-item" data-player='p1' data-square="3-5"></div>
				<div className="grid-item" data-player='p1' data-square="3-6"></div>
				<div className="grid-item" data-player='p1' data-square="3-7"></div>
				<div className="grid-item" data-player='p1' data-square="3-8"></div>
				<div className="grid-item" data-player='p1'  data-square="3-9"></div>
				<Letter>E</Letter>
				<div className="grid-item" data-player='p1' data-square="4-0"></div>
				<div className="grid-item" data-player='p1' data-square="4-1"></div>
				<div className="grid-item" data-player='p1' data-square="4-2"></div>
				<div className="grid-item" data-player='p1' data-square="4-3"></div>
				<div className="grid-item" data-player='p1' data-square="4-4"></div>
				<div className="grid-item" data-player='p1' data-square="4-5"></div>
				<div className="grid-item" data-player='p1' data-square="4-6"></div>
				<div className="grid-item" data-player='p1' data-square="4-7"></div>
				<div className="grid-item" data-player='p1' data-square="4-8"></div>
				<div className="grid-item" data-player='p1'  data-square="4-9"></div>
				<Letter>F</Letter>
				<div className="grid-item" data-player='p1' data-square="5-0"></div>
				<div className="grid-item" data-player='p1' data-square="5-1"></div>
				<div className="grid-item" data-player='p1' data-square="5-2"></div>
				<div className="grid-item" data-player='p1' data-square="5-3"></div>
				<div className="grid-item" data-player='p1' data-square="5-4"></div>
				<div className="grid-item" data-player='p1' data-square="5-5"></div>
				<div className="grid-item" data-player='p1' data-square="5-6"></div>
				<div className="grid-item" data-player='p1' data-square="5-7"></div>
				<div className="grid-item" data-player='p1' data-square="5-8"></div>
				<div className="grid-item" data-player='p1'  data-square="5-9"></div>
				<Letter>G</Letter>
				<div className="grid-item" data-player='p1' data-square="6-0"></div>
				<div className="grid-item" data-player='p1' data-square="6-1"></div>
				<div className="grid-item" data-player='p1' data-square="6-2"></div>
				<div className="grid-item" data-player='p1' data-square="6-3"></div>
				<div className="grid-item" data-player='p1' data-square="6-4"></div>
				<div className="grid-item" data-player='p1' data-square="6-5"></div>
				<div className="grid-item" data-player='p1' data-square="6-6"></div>
				<div className="grid-item" data-player='p1' data-square="6-7"></div>
				<div className="grid-item" data-player='p1' data-square="6-8"></div>
				<div className="grid-item" data-player='p1'  data-square="6-9"></div>
				<Letter>H</Letter>
				<div className="grid-item" data-player='p1' data-square="7-0"></div>
				<div className="grid-item" data-player='p1' data-square="7-1"></div>
				<div className="grid-item" data-player='p1' data-square="7-2"></div>
				<div className="grid-item" data-player='p1' data-square="7-3"></div>
				<div className="grid-item" data-player='p1' data-square="7-4"></div>
				<div className="grid-item" data-player='p1' data-square="7-5"></div>
				<div className="grid-item" data-player='p1' data-square="7-6"></div>
				<div className="grid-item" data-player='p1' data-square="7-7"></div>
				<div className="grid-item" data-player='p1' data-square="7-8"></div>
				<div className="grid-item" data-player='p1'  data-square="7-9"></div>
				<Letter>I</Letter>
				<div className="grid-item" data-player='p1' data-square="8-0"></div>
				<div className="grid-item" data-player='p1' data-square="8-1"></div>
				<div className="grid-item" data-player='p1' data-square="8-2"></div>
				<div className="grid-item" data-player='p1' data-square="8-3"></div>
				<div className="grid-item" data-player='p1' data-square="8-4"></div>
				<div className="grid-item" data-player='p1' data-square="8-5"></div>
				<div className="grid-item" data-player='p1' data-square="8-6"></div>
				<div className="grid-item" data-player='p1' data-square="8-7"></div>
				<div className="grid-item" data-player='p1' data-square="8-8"></div>
				<div className="grid-item" data-player='p1'  data-square="8-9"></div>
				<Letter>J</Letter>
				<div className="grid-item" data-player='p1' data-square="9-0"></div>
				<div className="grid-item" data-player='p1' data-square="9-1"></div>
				<div className="grid-item" data-player='p1' data-square="9-2"></div>
				<div className="grid-item" data-player='p1' data-square="9-3"></div>
				<div className="grid-item" data-player='p1' data-square="9-4"></div>
				<div className="grid-item" data-player='p1' data-square="9-5"></div>
				<div className="grid-item" data-player='p1' data-square="9-6"></div>
				<div className="grid-item" data-player='p1' data-square="9-7"></div>
				<div className="grid-item" data-player='p1' data-square="9-8"></div>
				<div className="grid-item" data-player='p1'  data-square="9-9"></div>
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