import Graph from "./graph.mjs";

const graph = new Graph();

// Knight travails
function knightTravails(start, end) {
  // Make the queue, its first value is our start point
  let queue = [start];
  // Make object, call it prev
  // Every key in this object will be a move, i.e. a row, col coordinate
  // Every corresponding value will be the first move that had it as a
  // a possible 'next' move
  let prev = { [`${start}`]: null };

  // Do breadth-first-search (BFS)
  // While the queue isn't empty,
  while (queue.length > 0) {
    // Get from the front of the queue, store it in variable current
    let current = queue.shift();
    // Check if the square we're on is the square we're trying to get to
    if (current[0] === end[0] && current[1] === end[1]) {
      // Create an array to store our moves from start to ebd
      let pathToEnd = [];
      // Since the prev move from our start is null, this will terminate
      // when we've gone back to where we started from.
      while (current) {
        // Add our current square to the path
        pathToEnd.unshift(current);
        // Set current to be the move that brought us to the square we just added to path
        current = prev[current];
      }
      // We have our path. Return it
      return pathToEnd;
    }
    // If we're not on the square we want, continue with BFS
    // For each possible move from the square we're currently on,
    for (let validMove of graph.squares[current[0]][current[1]].moves) {
      //  See if that move has already been checked and added to our prev object
      if (!(validMove in prev)) {
        // If it hasn't, tell our object that we get there fastest from where we currently are
        prev[validMove] = current;
        // Add that possible move to the queue to eventually check where it can bring us to
        queue.push(validMove);
      }
      // If that move exists in prev, we already know what square we can get there fastest from.
      // As such, we don't need to do anything with it.
    }
  }
}

function knightMoves(start, end) {
  let path = knightTravails(start, end);
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((move) => console.log(move));
}

knightMoves([4, 7], [5, 1]);
