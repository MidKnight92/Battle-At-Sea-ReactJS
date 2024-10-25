import React, { ReactElement } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Board from "../Boad/Board";
import BattleReport from "../BattleReport/BattleReport";
import Instructions from "../Instructions/Instructions";
import useGameStore from "../store/gameStore";
import { GameStatus, Player } from "../app/shared/model";

const Game: React.FC = (): ReactElement => {
  const gameStatus = useGameStore((state) => state.gameStatus);
  const changeGameStatus = useGameStore((state) => state.changeGameStatus);
  const reset = useGameStore((state) => state.reset);
  return (
    <div>
      <GlobalStyles />
      <Heading>Battle-At-Sea</Heading>
      <Main>
        <Board playerCode={Player.PLAYER_ONE}/>
        <BattleReport />
        <Board playerCode={Player.PLAYER_TWO}/>
      </Main>
      <ButtonContainer>
        {gameStatus === GameStatus.NOT_STARTED ? (
          <Button onClick={() => changeGameStatus(GameStatus.DEPLOYING)} type="button">
            Start Battle
          </Button>
        ) : (
          <Button onClick={reset} type="button">
            Reset Battle
          </Button>
        )}
      </ButtonContainer>
      <Instructions />
    </div>
  );
};

export default Game;

/*  Styles  */

const Heading = styled.h1`
  text-align: center;
  font-family: "Press Start 2P", cursive;
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
}`;

const ButtonContainer = styled.div`
  position: relative;
`;
const Button = styled.button`
  display: block;
  position: fixed;
  font-size: 10px;
  line-height: 10px;
  padding: 12px;
  font-family: "Press Start 2P", cursive;
  background-image: linear-gradient(
    to right,
    rgb(28, 110, 164) 0%,
    rgb(35, 136, 203) 50%,
    rgb(20, 78, 117) 100%
  );
  box-shadow: rgb(0, 0, 0) 5px 5px 25px 5px;
  border: 1px solid rgb(28, 110, 164);
  margin-left: 45%;
  margin-top: -5%;

  &:hover {
    background: #1c6ea4;
    cursor: pointer;
  }

  &:active {
    background: #144e75;
  }
`;
