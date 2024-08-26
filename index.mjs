import Graph from "./graph.mjs";

const graph = new Graph();

for (const row of graph.squares) {
  for (const square of row) {
    console.log(`Moves for row ${square.row}, col ${square.col}`);
    console.log(square.moves);
  }
}
