import initialFleet from "../fleet";

export const shipInstructions = initialFleet.map(
  ({ length, typeOfShip }) =>
    `Select ${length} adjacent cells in either the vertical or horizontal direction to place the ${typeOfShip}.`
);

export const generalInstructions: string[] = [
  "Players will deploy their fleet by selecting cells on their respective boards. Each fleet consists of 5 ships. Players must select adjacent cells either vertically or horizontally to match the required length of each ship for deployment. Non-adjacent cell selections will be ignored. After deploying their fleets, the battle will commence, with players taking turns selecting individual cells on their opponent's board. Each selection results in either a hit (red) or a miss (green), and all results will be reflected in the Battle Report. A player must sink their opponent's entire fleet to win. Player 1 starts the deployment and battling stage.",
  "Select a cell on your opponent's grid. Red indicates a hit, while green indicates a miss.",
];
