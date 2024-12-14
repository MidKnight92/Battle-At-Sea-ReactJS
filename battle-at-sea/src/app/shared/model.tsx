// PLAYER
export enum Player {
  PLAYER_ONE = "Player One",
  PLAYER_TWO = "Player Two",
}
export interface IPlayer {
  player: Player;
}

export interface PlayerStats {
  remainingShips: number;
  hits: number;
  misses: number;
}

// FLEET (SHIPS)
export enum Ship {
  Destroyer = "Destroyer",
  Cruiser = "Cruiser",
  Submarine = "Submarine",
  Battleship = "Battleship",
  Aircraft_Carrier = "Aircraft_Carrier",
}

export interface ShipStatus {
  id: number;
  typeOfShip: Ship;
  shipLength: number;
  hits: number;
  numberOfCellsSelected: number;
}

// GAME
export enum GameStatus {
  NOT_STARTED = "NOT_STARTED",
  DEPLOYING_DESTROYER = "DEPLOYING_DESTROYER",
  DEPLOYING_CRUISER = "DEPLOYING_CRUISER",
  DEPLOYING_SUBMARINE = "DEPLOYING_SUBMARINE",
  DEPLOYING_BATTLESHIP = "DEPLOYING_BATTLESHIP",
  DEPLOYING_AIRCRAFT_CARRIER = "DEPLOYING_AIRCRAFT_CARRIER",
  BATTLING = "BATTLING",
  OVER = "OVER",
}

export enum Direction {
  HORIZONTAL_POSITIVE = "HORIZONTAL_POSITIVE",
  HORIZONTAL_NEGATIVE = "HORIZONTAL_NEGATIVE",
  VERTICAL_POSITIVE = "VERTICAL_POSITIVE",
  VERTICAL_NEGATIVE = "VERTICAL_NEGATIVE"
}

export const TOTAL_NUMBER_OF_SHIPS = 4;

// export const TOTAL_CELLS = 9;

export const shipMap: Map<GameStatus, number> = new Map([
  [GameStatus.DEPLOYING_DESTROYER, 0],
  [GameStatus.DEPLOYING_CRUISER, 1],
  [GameStatus.DEPLOYING_SUBMARINE, 2],
  [GameStatus.DEPLOYING_BATTLESHIP, 3],
  [GameStatus.DEPLOYING_AIRCRAFT_CARRIER, 4],
]);
