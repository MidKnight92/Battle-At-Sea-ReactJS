import { Ship, ShipStatus } from "./app/shared/model";

// numberOfCellsSelected tracks the placement progress on the users board
const initialFleet: ShipStatus[] = [
  {
    id: 1,
    typeOfShip: Ship.Destroyer,
    shipLength: 2,
    hits: 0,
    numberOfCellsSelected: 0,
  },
  {
    id:2,
    typeOfShip: Ship.Cruiser,
    shipLength: 3,
    hits: 0,
    numberOfCellsSelected: 0,
  },
  {
    id: 3,
    typeOfShip: Ship.Submarine,
    shipLength: 3,
    hits: 0,
    numberOfCellsSelected: 0,
  },
  {
    id:4,
    typeOfShip: Ship.Battleship,
    shipLength: 4,
    hits: 0,
    numberOfCellsSelected: 0,
  },
  {
    id: 5,
    typeOfShip: Ship.Aircraft_Carrier,
    shipLength: 5,
    hits: 0,
    numberOfCellsSelected: 0,
  }
];

export default initialFleet;
