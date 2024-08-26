import Node from "./node.mjs";

export default class Graph {
  constructor() {
    this.squares = makeSquares();
  }

  makeSquares() {
    let squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        squares.push(new Node(row, col));
      }
    }
  }
}
