/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function traverseTreeLeftOrder(root: TreeNode | null, result: number[]): number[] {
  console.log(root, 'root');
  if (root) {
    const r = traverseTreeLeftOrder(root.left, [...result, root.val]);
    return traverseTreeLeftOrder(root.right, r);
  }
  return [...result, null];
}

function traverseTreeRightOrder(root: TreeNode | null, result: number[]): number[] {
  if (root) {
    const r = traverseTreeRightOrder(root.right, [...result, root.val]);
    return traverseTreeRightOrder(root.left, r);
  }
  return [...result, null];
}

function areSymmetricTrees(t1: TreeNode | null, t2: TreeNode | null): boolean {
  const r1 = traverseTreeLeftOrder(t1, [])
  const r2 = traverseTreeRightOrder(t2, []);
  if (r1.length != r2.length) return false;
  for (let i = 0; i < r1.length; i++) {
    if (r1[i] != r2[i]) return false;
  }
  return true
}

function isSymmetric(root: TreeNode | null): boolean {
  console.log(traverseTreeLeftOrder(root, []), typeof root);
  console.log(traverseTreeRightOrder(root, []));
  return root ? areSymmetricTrees(root.left, root.right) : true;
};