import {  Fleet, Ship, } from "./app/shared/model";


const fleet: Fleet = {
  [Ship.Destroyer]: {
    length: 2,
    hitsTaken: 0,
    piecesPlaced: 0,
  },
  [Ship.Cruiser]: {
    length: 3,
    hitsTaken: 0,
    piecesPlaced: 0,
  },
  [Ship.Submarine]: {
    length: 3,
    hitsTaken: 0,
    piecesPlaced: 0
  },
  [Ship.Battleship]: {
    length: 4,
    hitsTaken: 0,
    piecesPlaced: 0,
  },
  [Ship.Aircraft_Carrier]: {
    length: 5,
    hitsTaken: 0,
    piecesPlaced: 0,
  },
};

export default fleet;
