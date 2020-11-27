type Vertex = { connections: number[], indegree: number }

class Graph {
  adjacencyList: Map<number, Vertex>;
  degreeZeroVerticesQ: Set<number>;

  constructor(n: number) {
    this.adjacencyList = new Map();
    this.degreeZeroVerticesQ = new Set();

    for (let i = 0; i < n; i++) {
      this.adjacencyList.set(i, {
        connections: [],
        indegree: 0,
      })
      this.degreeZeroVerticesQ.add(i);
    }
  }

  updateDegreeZeroVerticesQ(vertex: number) {
    const degree = (this.adjacencyList.get(vertex) as Vertex).indegree;
    if (degree == 0) {
      this.degreeZeroVerticesQ.add(vertex);
    } else {
      this.degreeZeroVerticesQ.delete(vertex);
    }
  }

  incrementDegree(vertex: number) {
    (this.adjacencyList.get(vertex) as Vertex).indegree += 1;
    this.updateDegreeZeroVerticesQ(vertex);
  }

  decrementDegree(vertex: number) {
    (this.adjacencyList.get(vertex) as Vertex).indegree -= 1;
    this.updateDegreeZeroVerticesQ(vertex);
  }

  addConnection(b: number, a: number) {
    const prevB = this.adjacencyList.get(b) as Vertex;
    this.adjacencyList.set(b, {
      connections: [...prevB.connections, a],
      indegree: prevB.indegree,
    });
  }

  addEdge([a, b]: number[]) {
    this.incrementDegree(a);
    this.addConnection(b, a);
  }

  deque(queue: Set<number>) {
    const [first, ...rest] = queue.values();
    queue.delete(first);
    return first;
  }

  topologicalSort(): number[] {
    const result = [] as number[];

    if (this.degreeZeroVerticesQ.size == 0) return result;

    let n = this.adjacencyList.size;

    while (this.degreeZeroVerticesQ.size > 0) {
      n--;
      const [vertex, ...rest] = this.degreeZeroVerticesQ.values();
      result.push(vertex);
      this.decrementDegree(vertex);
      const connections = (this.adjacencyList.get(vertex) as Vertex).connections;
      connections.map(c => {
        this.decrementDegree(c);
      });
    }
    return (n === 0) ? result : [];
  }
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = new Graph(numCourses);
  for (let i = 0; i < prerequisites.length; i++) {
    graph.addEdge(prerequisites[i]);
  }
  return graph.topologicalSort();
};