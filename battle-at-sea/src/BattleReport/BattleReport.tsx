import { styled } from "styled-components";
import BattleReportDetails from "../BattleReportDetails/BattleReportDetails";
import { useEffect, useState } from "react";
import { GameStatus, Player } from "../app/shared/model";
import useGameStore from "../store/gameStore";

const BattleReport: React.FC = () => {
  const [count, setCount] = useState(0);
  const { gameStatus } = useGameStore();

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (gameStatus !== GameStatus.OVER) {
      intervalId = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
      return () => {
        if (intervalId) {
          setCount(0);
          clearInterval(intervalId);
        }
      };
    }
  }, [ gameStatus]);

  return (
    <Container>
      <BattleReportHeading>Battle Report</BattleReportHeading>
        <BattleTime>
        {(gameStatus !== GameStatus.NOT_STARTED) ? `Time: ${count < 10 ? '0' : ''}${count}` : `Time: 00` }
        </BattleTime>
      <BattleReportDetails playerCode={Player.PLAYER_ONE} />
      <BattleReportDetails playerCode={Player.PLAYER_TWO} />
    </Container>
  );
};

export default BattleReport;

const Container = styled.div`
text-align: center;
`

const BattleReportHeading = styled.h2`
  font-size: 20px;
  margin-top: 40px;
`;

const BattleTime = styled.p``;
