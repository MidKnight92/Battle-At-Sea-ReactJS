// PLAYER
export enum Player {
  PLAYER_ONE = "P1",
  PLAYER_TWO = "P2",
}
export interface IPlayer {
  playerCode: Player;
}

export type PlayerStats = {
  remainingShips: number;
  hits: number;
  misses: number;
};

export type PlayerType = Player;


// FLEET (SHIPS)

export enum Ship {
  Destroyer = "D",
  Cruiser = "C",
  Submarine = "S",
  Battleship = "B",
  Aircraft_Carrier = "A",
}

interface ShipStats {
  length: number;
  hitsTaken: number;
  piecesPlaced: number;
}

export type Fleet = Record<Ship, ShipStats>;


// BOARD
export type EmptySpace = "";
export type SunkenShip = Lowercase<Ship>;
export type BoardPiece = Ship | SunkenShip | EmptySpace;
export type Board = BoardPiece[][];


// GAME
export enum GameStatus {
  NOT_STARTED = "NOT_STARTED",
  DEPLOYING = "DEPLOYING",
  BATTLING = "BATTLING",
  OVER = "OVER",
}

export type GameStatusType = GameStatus;






