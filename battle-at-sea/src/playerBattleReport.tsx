import fleet, { Fleet } from "./fleet";
import board from "./board";

const playerBattleReport: PlayerBattleReport = {
  playerNumber: "",
  fleetCount: 0,
  hitCount: 0,
  missCount: 0,
  opponentShipSunkCount: 0,
  fleet,
  board,
  selectedGridItems: [] as string[][],
};

export default playerBattleReport;

interface PlayerBattleReport {
  playerNumber: string;
  fleetCount: number;
  hitCount: number;
  missCount: number;
  opponentShipSunkCount: number;
  fleet: Fleet[];
  board: number[][];
  selectedGridItems: string[][];
}
