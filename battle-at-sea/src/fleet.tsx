import { Ship, ShipStats } from "./app/shared/model";


const initialFleet: ShipStats[] = [
  {
    typeOfShip: Ship.Destroyer,
    shipLength: 2,
    hits: 0,
    numberOfCellsSelected: 0,
    // isDeployed: false,
    // sunk: false
  },
  {
    typeOfShip: Ship.Cruiser,
    shipLength: 3,
    hits: 0,
    numberOfCellsSelected: 0,
    // isDeployed: false,
    // sunk: false
  },
  {
    typeOfShip: Ship.Submarine,
    shipLength: 3,
    hits: 0,
    numberOfCellsSelected: 0,
    // isDeployed: false,
    // sunk: false
  },
  {
    typeOfShip: Ship.Battleship,
    shipLength: 4,
    hits: 0,
    numberOfCellsSelected: 0,
    // isDeployed: false,
    // sunk: false
  },
  {
    typeOfShip: Ship.Aircraft_Carrier,
    shipLength: 5,
    hits: 0,
    numberOfCellsSelected: 0,
    // isDeployed: false,
    // sunk: false
  },
];
export default initialFleet;
