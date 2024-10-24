import { create } from "zustand";
import { Player, PlayerBattleReport } from "../app/shared/model";
import board from "../board";
import fleet from "../fleet";

const initialPlayerBattleReport: Record<Player, PlayerBattleReport> = {
  p1: {
    remainingShips: 5,
    hits: 0,
    misses: 0,
    board,
    fleet,
  },
  p2: {
    remainingShips: 5,
    hits: 0,
    misses: 0,
    board,
    fleet,
  },
};

type State = {
  battleState: Record<Player, PlayerBattleReport>;
  activePlayer: Player;
  isBattleStarted: boolean;
};

type Actions = {
  changeActivePlayer: () => void;
  changeBattleState: () => void;
  reset: () => void;
};

const initialState: State = {
  battleState: initialPlayerBattleReport,
  activePlayer: "p1",
  isBattleStarted: false,
};

const useGameStore = create<State & Actions>((set, get) => ({
  ...initialState,

  //   Setters
  changeActivePlayer: () =>
    set((state: { activePlayer: Player }) => ({
      activePlayer: state.activePlayer === "p1" ? "p2" : "p1",
    })),
  changeBattleState: () =>
    set((state: { isBattleStarted: boolean }) => ({
      isBattleStarted: !state.isBattleStarted,
    })),
  reset: () => {
    set(initialState);
  },

  //   Getters
}));

export default useGameStore;
