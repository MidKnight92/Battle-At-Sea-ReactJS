import { styled } from "styled-components";

const Status: React.FC = () => {
    return(
        <div className="Stats">
            <h2 id="battleReport">Battle Report</h2>
                <section>
                    <h6 id="p1BattleReportHeading">Player 1</h6>
                    <h6 id="p1FleetRemainingStats">Fleet Remaining: #</h6>	
                    <h6 id="p1HitsStats">Hits: #</h6>	
                    <h6 id="p1MissesStats">Misses: #</h6>
                </section>
                <section>
                    <h6 id="p2BattleReportHeading">Player 2</h6>
                    <h6 id="p2FleetRemainingStats">Fleet Remaining: #</h6>	
                    <h6 id="p2HitsStats">Hits: #</h6>	
                    <h6 id="p2MissesStats">Misses: #</h6>
                </section>
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