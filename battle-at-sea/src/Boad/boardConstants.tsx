import { Ship } from "../app/shared/model";

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

  export type Cell = 0 | 1 | 2 | 3 | 4;

  export const initalBoard: Cell[][] = Array(10).fill([]).map(() => Array(10).fill(0))

  export const LAST_CELL = 9;
  export const FIRST_CELL = 0;
