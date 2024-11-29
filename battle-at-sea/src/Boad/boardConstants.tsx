import { Ship, ShipStats } from "../app/shared/model";

export const LETTER_COORDINATES: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
  ];
  
  export const NUMBER_COORDINATES: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  export const initalBoard: null[][] | ShipStats[][] = [
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null]
  ];

  export const LAST_CELL = 9;
  export const FIRST_CELL = 0;
