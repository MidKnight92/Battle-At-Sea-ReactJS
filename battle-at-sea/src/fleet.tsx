const fleet: Fleet[] = [
  {
    typeOfShip: "Destroyer",
    length: 2,
    letter: "d",
    placed: false,
  },
  {
    typeOfShip: "Cruiser",
    length: 3,
    letter: "c",
    placed: false,
  },
  {
    typeOfShip: "Submarine",
    length: 3,
    letter: "s",
    placed: false,
  },
  {
    typeOfShip: "Battleship",
    length: 4,
    letter: "b",
    placed: false,
  },
  {
    typeOfShip: "Aircraft Carrier",
    length: 5,
    letter: "a",
    placed: false,
  },
];

export default fleet;

export interface Fleet {
  typeOfShip: string;
  length: number;
  letter: string;
  placed: boolean;
}
