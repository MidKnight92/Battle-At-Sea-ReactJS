import { styled } from "styled-components";
import { IPlayer } from "../app/shared/model";
import useGameStore from "../store/gameStore";

const BattleReportDetails: React.FC<IPlayer> = ({ player }) => {
  const remainingShips: number = useGameStore(
    (state) => state[player].remainingShips
  );
  const hits: number = useGameStore((state) => state[player].hits);
  const misses: number = useGameStore((state) => state[player].misses);

  return (
    <section>
      <BattleReportPlayer>
        {player}
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
