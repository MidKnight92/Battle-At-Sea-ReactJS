import { styled } from "styled-components";
import BattleReportDetails from "../BattleReportDetails/BattleReportDetails";
import { useEffect, useRef, useState } from "react";
import { GameStatus, Player } from "../app/shared/model";
import useGameStore from "../store/gameStore";

const BattleReport: React.FC = () => {
  const [count, setCount] = useState(0);
  const { gameStatus } = useGameStore();
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const startInterval = (): void => {
    intervalId.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  const clearExistingInterval = (): void => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      setCount(0);
      intervalId.current = null;
    }
  };

  const manageInterval = (): void => {
    if (gameStatus === GameStatus.DEPLOYING_DESTROYER) {
      startInterval();
    } else if (
      gameStatus === GameStatus.NOT_STARTED ||
      gameStatus === GameStatus.OVER
    ) {
      clearExistingInterval();
    }
  };

  const getTime = (): string => {
    if (
      gameStatus === GameStatus.NOT_STARTED ||
      gameStatus === GameStatus.OVER
    ) {
      return "Time: 00";
    }
    return count < 10 ? `Time: 0${count}` : `Time: ${count}`;
  };

  useEffect(() => {
    manageInterval();
    return () => clearExistingInterval();
  }, [gameStatus, manageInterval]);

  return (
    <Container>
      <BattleReportHeading>Battle Report</BattleReportHeading>
      <p>{getTime()}</p>
      <BattleReportDetails playerCode={Player.PLAYER_ONE} />
      <BattleReportDetails playerCode={Player.PLAYER_TWO} />
    </Container>
  );
};

export default BattleReport;

const Container = styled.div`
  margin-top: 5%;
  text-align: center;
  font-family: "Press Start 2P", cursive;
  font-size: .75em;
`;

const BattleReportHeading = styled.h2`
  font-size: 1em;
  margin-top: 40px;
`;
