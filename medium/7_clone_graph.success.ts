/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = (val === undefined ? 0 : val)
    this.neighbors = (neighbors === undefined ? [] : neighbors)
  }
}




function cloneGraph(node: Node | null): Node | null {
  if (node == null) return node;
  if (node.neighbors.length == 0) return new Node(node.val, []);

  const visited = new Map<number, Node>();

  function cloneNode(node: Node): Node {
    let newNode = new Node(node.val, []);
    visited.set(newNode.val, newNode);

    const neighours = node.neighbors.map((n: Node) => {
      if (visited.get(n.val)) return visited.get(n.val);
      return cloneNode(n);
    });

    newNode.neighbors = neighours;
    return newNode;
  }

  return cloneNode(node);
};