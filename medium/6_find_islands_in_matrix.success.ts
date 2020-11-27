// type Vertex = string;

// function gridToGraph(grid: string[][]) {
//   let graph = new Map<Vertex, Vertex[]>();
//   let node = 1;
//   let rows = grid.length;
//   for (let i = 0; i < rows; i++) {
//     let cols = grid[i].length;
//     for (let j = 0; j < cols; j++) {
//       if (grid[i][j] == "1") {
//         const neighours = getNeighours(i, j, rows, cols, grid);
//         graph.set(getPath([i, j]), neighours);
//       }
//     }
//   }
//   return graph;
// }

// function isOne(grid: string[][], i: number, j: number): boolean {
//   return grid[i][j] == "1"
// }

// function getNeighours(i: number, j: number, rows: number, cols: number, grid: string[][]): string[] {
//   return [[i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]].filter(([ii, jj]) => {
//     return ii >= 0 && ii < rows && jj >= 0 && jj < cols;
//   }).filter(val => isOne(grid, val[0], val[1])).map(getPath);
// }

// function getPath([i, j]: number[]): string {
//   return `${i},${j}`;
// }

// function countGraphs(graph: Map<string, Vertex[]>): number {
//   const visited = new Map<string, boolean>();
//   let count = 0;
//   for (const [vertex, connections] of graph) {
//     if (!visited.get(vertex)) {
//       count++;
//       console.log("visiting", vertex, visited)
//       function traverse(start: Vertex) {
//         if (!visited.get(start)) {
//           visited.set(start, true);
//           const connections = graph.get(start) as Vertex[];
//           console.log("starting", start, visited)
//           for (let i = 0; i < connections.length; i++) {
//             traverse(connections[i]);
//           }
//         }
//       }

//       traverse(vertex);
//     }
//   }
//   return count;
// }

// function numIslands(grid: string[][]): number {
//   const graph = gridToGraph(grid);
//   console.log("graph", graph)
//   const count = countGraphs(graph);

//   return count;
// };

// // numIslands([["1","1","0"], ["0", "0", "1"], ["1", "0", "1"]])
// // [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

//==================================================================================================

function connections(x: number, y: number, rows: number, cols: number): number[][] {
  return [[x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y]].filter(([ii, jj]) => {
    return ii >= 0 && ii < rows && jj >= 0 && jj < cols;
  })
}

function numIslands(grid: string[][]): number {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        count++;
        function DFS(x: number, y: number) {
          if (grid[x][y] == "1") {
            grid[x][y] = "2";
            const con = connections(x, y, grid.length, grid[i].length);
            for (let i = 0; i < con.length; i++) {
              DFS(con[i][0], con[i][1]);
            }
          }
        }
        DFS(i, j);
      }
    }
  }
  return count;
}
