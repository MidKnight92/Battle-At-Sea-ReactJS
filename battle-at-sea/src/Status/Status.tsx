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
            <h2 id="battleReport">Battle Report</h2>
                <BattleReportDetails {...playerBattleReport}/>
                <BattleReportDetails {...{...playerBattleReport, playerNumber: '2'}}/>
                <StartGameButton id="startBattle" type="button">Start Battle</StartGameButton>	
        </div>
    );
}

export default Status;

const StartGameButton = styled.button`
    font-size: 10px; 
    line-height: 10px; 
    padding: 12px; 
    font-family: 'Press Start 2P', cursive; 
    background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); 
    box-shadow: rgb(0, 0, 0) 5px 5px 25px 5px; 
    border: 1px solid rgb(28, 110, 164); 
    display: inline-block;
    margin-top: 50px;
    margin-left: 50px  ;

    &:hover {
    background: #1C6EA4;
    }

    &:active {
    background: #144E75;
    }
`;