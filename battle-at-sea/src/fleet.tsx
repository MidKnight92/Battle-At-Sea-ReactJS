import { Ship, ShipStats } from "./app/shared/model";


const initialFleet: ShipStats[] = [
  {
    typeOfShip: Ship.Destroyer,
    length: 2,
    location: new Array(2).fill(null),
    isDeployed: false,
    sunk: false
  },
  {
    typeOfShip: Ship.Cruiser,
    length: 3,
    location: new Array(3).fill(null),
    isDeployed: false,
    sunk: false
  },
  {
    typeOfShip: Ship.Submarine,
    length: 3,
    location: new Array(3).fill(null),
    isDeployed: false,
    sunk: false
  },
  {
    typeOfShip: Ship.Battleship,
    length: 4,
    location: new Array(4).fill(null),
    isDeployed: false,
    sunk: false
  },
  {
    typeOfShip: Ship.Aircraft_Carrier,
    length: 5,
    location: new Array(5).fill(null),
    isDeployed: false,
    sunk: false
  },
];
export default initialFleet;
