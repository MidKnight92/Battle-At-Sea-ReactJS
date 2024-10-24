import { styled } from "styled-components";
import BattleReportDetails from "../BattleReportDetails/BattleReportDetails";

const BattleReport: React.FC = () => {
  return (
    <div>
      <BattleReportHeading>Battle Report</BattleReportHeading>
      <BattleReportDetails player="p1" />
      <BattleReportDetails player="p2" />
    </div>
  );
};

export default BattleReport;

const BattleReportHeading = styled.h2`
  font-size: 20px;
  margin-top: 100px;
`;
