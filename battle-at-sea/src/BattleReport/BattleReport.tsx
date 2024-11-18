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
    if (gameStatus === GameStatus.DEPLOYING) {
      startInterval();
    } else if (
      gameStatus === GameStatus.NOT_STARTED ||
      gameStatus === GameStatus.OVER
    ) {
      clearExistingInterval();
    }
  };

  useEffect(() => {
    manageInterval();
    return () => clearExistingInterval();
  }, [gameStatus]);

  return (
    <Container>
      <BattleReportHeading>Battle Report</BattleReportHeading>
      <BattleTime>
        {`Time: ${
          gameStatus !== GameStatus.NOT_STARTED
            ? count < 10
              ? `0${count}`
              : count
            : "00"
        }`}
      </BattleTime>
      <BattleReportDetails playerCode={Player.PLAYER_ONE} />
      <BattleReportDetails playerCode={Player.PLAYER_TWO} />
    </Container>
  );
};

export default BattleReport;

const Container = styled.div`
  text-align: center;
`;

const BattleReportHeading = styled.h2`
  font-size: 20px;
  margin-top: 40px;
`;

const BattleTime = styled.p`
  font-family: "Press Start 2P", cursive;
`;
