import { Fleet, Ship } from "./app/shared/model";

const fleet: Fleet = {
  [Ship.Destroyer]: {
    length: 0,
    hitsTaken: 0,
    piecesPlaced: 0,
  },
  [Ship.Cruiser]: {
    length: 0,
    hitsTaken: 0,
    piecesPlaced: 0,
  },
  [Ship.Submarine]: {
    length: 0,
    hitsTaken: 0,
    piecesPlaced: 0,
  },
  [Ship.Battleship]: {
    length: 0,
    hitsTaken: 0,
    piecesPlaced: 0,
  },
  [Ship.Aircraft_Carrier]: {
    length: 0,
    hitsTaken: 0,
    piecesPlaced: 0,
  },
};

export default fleet;
