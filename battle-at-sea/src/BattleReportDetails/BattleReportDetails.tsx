import { styled } from "styled-components";
import { IPlayer, Player } from "../app/shared/model";
import useGameStore from "../store/gameStore";

const BattleReportDetails: React.FC<IPlayer> = ({ playerCode }) => {
  const remainingShips: number = useGameStore(
    (state) => state[playerCode].remainingShips
  );
  const hits: number = useGameStore((state) => state[playerCode].hits);
  const misses: number = useGameStore((state) => state[playerCode].misses);

  return (
    <section>
      <BattleReportPlayer>
        Player {playerCode === Player.PLAYER_ONE ? "One" : "Two"}
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
  font-family: "Press Start 2P", cursive;
  text-decoration: underline;
  margin-top: 60px;
`;
