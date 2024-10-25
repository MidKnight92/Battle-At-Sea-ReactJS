import { styled } from "styled-components";
import BattleReportDetails from "../BattleReportDetails/BattleReportDetails";
import { useState } from "react";
import { Player } from "../app/shared/model";

const BattleReport: React.FC = () => {
  // const [startTime, setStartTime] = useState(null);
  // const [now, setNow] = useState(null);

  return (
    <div>
      <BattleReportHeading>Battle Report</BattleReportHeading>
      {/* <BattleTime></BattleTime>  TODO: implement game timer when game is started*/} 
      <BattleReportDetails playerCode={Player.PLAYER_ONE} />
      <BattleReportDetails playerCode={Player.PLAYER_TWO} />
    </div>
  );
};

export default BattleReport;

const BattleReportHeading = styled.h2`
  font-size: 20px;
  margin-top: 100px;
`;

const BattleTime = styled.p``;
