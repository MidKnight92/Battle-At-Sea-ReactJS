import { styled } from "styled-components";

interface BattleReportDetailsProps {
    playerNumber: string;
    fleetCount: number;
    hitCount: number;
    missCount: number;
}

const BattleReportDetails: React.FC<BattleReportDetailsProps> = ({playerNumber, fleetCount, hitCount, missCount}) => {
    return (
        <section>
            <BattleReportPlayer>Player {playerNumber} </BattleReportPlayer>
            <p id="p1FleetRemainingStats">Fleet Remaining: {fleetCount}</p>	
            <p id="p1HitsStats">Hits: {hitCount}</p>	
            <p id="p1MissesStats">Misses: {missCount}</p>
        </section>
    );
}

export default BattleReportDetails;

const BattleReportPlayer = styled.p`
    text-decoration: underline;
    margin-top: 60px;
`;

