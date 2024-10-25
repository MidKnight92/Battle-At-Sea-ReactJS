import { create } from "zustand";
import { GameStatus, Player, PlayerStats } from "../app/shared/model";

type State = {
  [Player.PLAYER_ONE]: PlayerStats;
  [Player.PLAYER_TWO]: PlayerStats;
  activePlayer: Player;
  gameStatus: GameStatus;
};

type Actions = {
  changeActivePlayer: () => void;
  changeGameStatus: (gameStatus: State["gameStatus"]) => void;
  reset: () => void;
};

const initialState: State = {
  [Player.PLAYER_ONE]: {
    remainingShips: 5,
    hits: 0,
    misses: 0,
  },
  [Player.PLAYER_TWO]: {
    remainingShips: 5,
    hits: 0,
    misses: 0,
  },
  activePlayer: Player.PLAYER_ONE,
  gameStatus: GameStatus.NOT_STARTED,
};

const useGameStore = create<State & Actions>((set, get) => ({
  ...initialState,

  //   Setters
  changeActivePlayer: () =>
    set((state: { activePlayer: Player }) => ({
      activePlayer:
        state.activePlayer === Player.PLAYER_ONE
          ? Player.PLAYER_TWO
          : Player.PLAYER_ONE,
    })),
  changeGameStatus: (newStatus: GameStatus) =>
    set((state: { gameStatus: GameStatus; activePlayer: Player }) => ({
      gameStatus: (state.gameStatus = newStatus),
      activePlayer: (state.activePlayer = Player.PLAYER_ONE),
    })),
  reset: () => {
    set(initialState);
  },

  //   Getters
}));

export default useGameStore;
