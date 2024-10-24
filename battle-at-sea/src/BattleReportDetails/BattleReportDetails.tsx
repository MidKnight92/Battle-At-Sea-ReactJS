import { styled } from "styled-components";
import { IPlayer } from "../app/shared/model";
import useGameStore from "../store/gameStore";

const BattleReportDetails: React.FC<IPlayer> = ({ player }) => {
  const remainingShips = useGameStore(
    (state) => state.battleState[player].remainingShips
  );
  const hits = useGameStore((state) => state.battleState[player].hits);
  const misses = useGameStore((state) => state.battleState[player].misses);

  return (
    <section>
      <BattleReportPlayer>
        Player {player === "p1" ? "One" : "Two"}{" "}
      </BattleReportPlayer>
      <p>Fleet Remaining: {remainingShips}</p>
      <p>Hits: {hits}</p>
      <p>Misses: {misses}</p>
    </section>
  );
};

export default BattleReportDetails;

/*  Styles  */

const BattleReportPlayer = styled.p`
  text-decoration: underline;
  margin-top: 60px;
`;
