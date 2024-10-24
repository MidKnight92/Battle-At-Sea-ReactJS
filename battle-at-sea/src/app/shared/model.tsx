export type Player = "p1" | "p2";

export interface IPlayer {
  player: Player;
}

export type Board = string[][];

export enum Ship {
  Destroyer = "d",
  Cruiser = "c",
  Submarine = "s",
  Battleship = "b",
  Aircraft_Carrier = "a",
}

export type Fleet = {
  d: {
    length: number;
    hitsTaken: number;
  };
  c: {
    length: number;
    hitsTaken: number;
  };
  s: {
    length: number;
    hitsTaken: number;
  };
  b: {
    length: number;
    hitsTaken: number;
  };
  a: {
    length: number;
    hitsTaken: number;
  };
};

export type Point = {
  x: number;
  y: number;
};

export interface PlayerBattleReport {
  remainingShips: number;
  hits: number;
  misses: number;
  board: Board;
  fleet: Fleet;
}
