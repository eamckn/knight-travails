export default class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.moves = this.findMoves(this.row, this.col);
  }

  findMoves(row, col) {
    let legalMoves = [];
    let allMoves = [
      [row + 2, col + 1],
      [row + 2, col - 1],
      [row - 2, col + 1],
      [row - 2, col - 1],
      [row + 1, col + 2],
      [row + 1, col - 2],
      [row - 1, col + 2],
      [row - 1, col - 2],
    ];
    legalMoves = allMoves.filter((move) => {
      return move[0] < 8 && move[0] >= 0 && move[1] < 8 && move[1] >= 0;
    });
    return legalMoves;
  }
}
