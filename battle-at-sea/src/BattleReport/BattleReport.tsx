import { styled } from "styled-components";
import BattleReportDetails from "../BattleReportDetails/BattleReportDetails";

const Status: React.FC = () => {
    const playerBattleReport = {
        playerNumber: '1',
        fleetCount: 0,
        hitCount: 0,
        missCount: 0
    }
    return(
        <div className="Stats">
            <BattleReportHeading>Battle Report</BattleReportHeading>
                <BattleReportDetails {...playerBattleReport}/>
                <BattleReportDetails {...{...playerBattleReport, playerNumber: '2'}}/>

        </div>
    );
}

export default Status;

const BattleReportHeading = styled.h2`
    font-size: 20px;
	margin-top: 100px;
`;