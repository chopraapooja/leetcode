// I will use BFS which i learnt while learning graphs.
// I will implement BFS using Q

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

class Q<T> {
  queue: Array<T>;
  constructor() {
    this.queue = [];
  }

  enque(item: T) {
    this.queue.push(item);
  }

  deque(): T {
    const [first] = this.queue.splice(0, 1);
    return first;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }
}

function levelOrder(tree: TreeNode | null): number[][] {
  let result = [];
  if (tree) {
    function visit(arr: number[]) {
      result.push(arr);
    }
    let queue = new Q<TreeNode>();
    queue.enque(tree);
    while (!queue.isEmpty()) {
      visit(queue.queue.map(n => n.val));
      let newQ = new Q<TreeNode>();
      for (let i = 0; i < queue.queue.length; i++) {
        const node = queue.queue[i];
        node.left && newQ.enque(node.left);
        node.right && newQ.enque(node.right);
      }
      queue = newQ;
    }
  }
  return result;
}