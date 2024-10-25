export enum Player {
  PLAYER_ONE = "P1",
  PLAYER_TWO = "P2",
}

export enum GameStatus {
  NOT_STARTED = "NOT_STARTED",
  DEPLOYING = "DEPLOYING",
  BATTLING = "BATTLING",
  OVER = "OVER",
}

export type PlayerType = Player; 
export type GameStatusType = GameStatus; 
export type Board = string[][];

export enum Ship {
  Destroyer = "d",
  Cruiser = "c",
  Submarine = "s",
  Battleship = "b",
  Aircraft_Carrier = "a",
}

export interface IPlayer {
  playerCode: Player;
}

export type PlayerStats = {
  remainingShips: number;
  hits: number;
  misses: number;
};

export type Fleet = {
  d: {
    length: number;
    hitsTaken: number;
    piecesPlaced: number;
  };
  c: {
    length: number;
    hitsTaken: number;
    piecesPlaced: number;
  };
  s: {
    length: number;
    hitsTaken: number;
    piecesPlaced: number;
  };
  b: {
    length: number;
    hitsTaken: number;
    piecesPlaced: number;
  };
  a: {
    length: number;
    hitsTaken: number;
    piecesPlaced: number;
  };
};

export interface PlayerBattleReport {
  remainingShips: number;
  hits: number;
  misses: number;
}
