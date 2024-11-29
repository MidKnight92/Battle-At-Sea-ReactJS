import { ShipStats, Direction } from "../app/shared/model";
import { LAST_CELL, FIRST_CELL } from "./boardConstants";

const isInbound = (
  rowIndex: number,
  columnIndex: number,
  shipLength: number,
  direction: string
): boolean => {
  switch (direction) {
    case Direction.HORIZONTAL_POSITIVE:
      return columnIndex + shipLength - 1 <= LAST_CELL;
    case Direction.HORIZONTAL_NEGATIVE:
      return columnIndex - shipLength - 1 >= FIRST_CELL;
    case Direction.VERTICAL_POSITIVE:
      return rowIndex - shipLength - 1 >= FIRST_CELL;
    case Direction.VERTICAL_NEGATIVE:
      return rowIndex + shipLength - 1 <= LAST_CELL;
    default:
      return false;
  }
};

const traverseAxis = (
  board: null[][] | ShipStats[][],
  rowIndex: number,
  columnIndex: number,
  shipLength: number,
  direction: Direction
): boolean => {
  for (let i = 1; i < shipLength; i++) {
    const newRowIndex =
      direction === Direction.VERTICAL_POSITIVE
        ? rowIndex - i
        : rowIndex + (direction === Direction.VERTICAL_NEGATIVE ? i : 0);
    const newColIndex =
      direction === Direction.HORIZONTAL_POSITIVE
        ? columnIndex + i
        : columnIndex - (direction === Direction.HORIZONTAL_NEGATIVE ? i : 0);

    if (!isCellAvailable(board, newRowIndex, newColIndex)) return false;
  }

  return true;
};

const areCellsAvailable = (
  board: null[][] | ShipStats[][],
  rowIndex: number,
  columnIndex: number,
  shipLength: number,
  direction: Direction
): boolean => {
  return (
    isInbound(rowIndex, columnIndex, shipLength, direction) &&
    traverseAxis(board, rowIndex, columnIndex, shipLength, direction)
  );
};

const areAdjoiningCellsAvaliable = (
  board: null[][] | ShipStats[][],
  rowIndex: number,
  columnIndex: number,
  shipLength: number
): boolean => {
  return (
    areCellsAvailable(
      board,
      rowIndex,
      columnIndex,
      shipLength,
      Direction.HORIZONTAL_POSITIVE
    ) ||
    areCellsAvailable(
      board,
      rowIndex,
      columnIndex,
      shipLength,
      Direction.HORIZONTAL_NEGATIVE
    ) ||
    areCellsAvailable(
      board,
      rowIndex,
      columnIndex,
      shipLength,
      Direction.VERTICAL_POSITIVE
    ) ||
    areCellsAvailable(
      board,
      rowIndex,
      columnIndex,
      shipLength,
      Direction.VERTICAL_NEGATIVE
    )
  );
};

export const isPlayerDeployingLastShip = (currentShip: number, fleetLength: number ): boolean => currentShip === fleetLength;

export const isCellAvailable = (board: null[][] | ShipStats[][], rowIndex: number, columnIndex: number): boolean =>
  board[rowIndex][columnIndex] === null;

export const isCellSelectionValid = (board: null[][] | ShipStats[][], rowIndex: number, columnIndex: number, shipLength: number) =>
  isCellAvailable(board, rowIndex, columnIndex) &&
  areAdjoiningCellsAvaliable(board, rowIndex, columnIndex, shipLength);
