interface BattleReportDetailsProps {
    playerNumber: string;
    fleetCount: number;
    hitCount: number;
    missCount: number;
}

const BattleReportDetails: React.FC<BattleReportDetailsProps> = ({playerNumber, fleetCount, hitCount, missCount}) => {
    return (
        <section>
            <p id="p1BattleReportHeading">Player {playerNumber} </p>
            <p id="p1FleetRemainingStats">Fleet Remaining: {fleetCount}</p>	
            <p id="p1HitsStats">Hits: {hitCount}</p>	
            <p id="p1MissesStats">Misses: {missCount}</p>
        </section>
    );
}

export default BattleReportDetails;