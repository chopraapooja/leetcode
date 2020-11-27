function calcEquation(equations, values, queries) {
  let graph = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];

    const adjacencyMapA = graph.get(a) || new Map();
    adjacencyMapA.set(b, values[i]);
    graph.set(a, adjacencyMapA);

    const adjacencyMapB = graph.get(b) || new Map();
    adjacencyMapB.set(a, 1 / values[i]);
    graph.set(b, adjacencyMapB);
  }
  console.log(graph);

  const visited = new Set();
  function DFS(start, dest) {

    if (!graph.get(start) || !graph.get(dest)) return -1.0;

    if (start == dest) return 1.0;


    visited.add(start);

    const adjacencyMap = graph.get(start);
    if (!!adjacencyMap.get(dest)) return adjacencyMap.get(dest);

    for (const [key, val] of adjacencyMap) {
      if (!visited.has(key)) {
        const elem = DFS(key, dest);
        if (elem > 0) return elem * val;
      }
    }
    return 0;
  }

  let result = [];
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const [x, y] = query;
    result.push(DFS(x, y))

    // if (!graph.get(x) || !graph.get(y)) {
    //   result.push(-1.0);
    // } else if (x === y) {
    //   result.push(1.0);
    // } else {
    //   result.push(DFS(graph, x, y));
    // }
  }
  return result;
};