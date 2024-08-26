import Graph from "./graph.mjs";

const graph = new Graph();

for (const square of graph.squares) {
  console.log(`Moves for row ${square.row}, col ${square.col}`);
  console.log(square.moves);
}
