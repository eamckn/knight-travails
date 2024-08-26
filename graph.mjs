import Node from "./node.mjs";

export default class Graph {
  constructor() {
    this.squares = this.makeSquares();
  }

  makeSquares() {
    let squares = [];
    for (let row = 0; row < 8; row++) {
      squares[row] = [];
      for (let col = 0; col < 8; col++) {
        squares[row][col] = new Node(row, col);
      }
    }
    return squares;
  }
}
