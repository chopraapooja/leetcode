/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

const visited = new Map<number, Node>();

function copyRandomList(head) {
  if (head == null) return head;

  let start = head;

  while (start != null) {
    let copyStart = new Node(start.val);
    copyStart.next = start.next;
    copyStart.random = start.random;
    start.next = copyStart;
    start = copyStart.next;
  }

  start = head;
  let newList = start.next;
  while (start != null) {
    let nextNode = start.next;
    nextNode.random = nextNode.random ? nextNode.random.next : null;
    start = nextNode.next;
  }
  start = head;
  while (start != null) {
    let nextNode = start.next;
    start.next = nextNode.next;
    start = nextNode.next;
    nextNode.next = nextNode.next ? nextNode.next.next : null;
  }
  return newList;
};

[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
