/**
 Do not return anything, modify board in-place instead.
 */

function countAliveNeighbors(board: number[][], i: number, j: number): number {
  const coords = [[i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]];
  let count = 0;
  for (let x = 0; x < coords.length; x++) {
    const [r, c] = coords[x];
    if (r >= 0 && c >= 0 && r < board.length && c < board[0].length) {
      (board[r][c] === 1) && count++;
    }

  }
  return count
}

function gameOfLife(board: number[][]): void {
  const originalBoard = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const count = countAliveNeighbors(originalBoard, i, j);
      if (count < 2) {
        // die
        board[i][j] = 0
      } else if (count === 2) {
        // stay alive if alive
        board[i][j] = board[i][j] === 1 ? 1 : 0
      } else if (count === 3) {
        //alive
        board[i][j] = 1
      } else if (count > 3) {
        // die
        board[i][j] = 0;
      }
    }

  }
};