import { styled } from "styled-components";
import { IPlayer, Player } from "../app/shared/model";
import useGameStore from "../store/gameStore";

const BattleReportDetails: React.FC<IPlayer> = ({ playerCode }) => {
  const remainingShips = useGameStore(
    (state) => state[playerCode].remainingShips
  );
  const hits = useGameStore((state) => state[playerCode].hits);
  const misses = useGameStore((state) => state[playerCode].misses);

  return (
    <section>
      <BattleReportPlayer>
        Player {playerCode === Player.PLAYER_ONE ? "One" : "Two"}{" "}
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
