/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

function countNodes(list: ListNode | null) {
  let count = 0;
  let ptr = list;
  while (ptr != null) {
    count++;
    ptr = ptr.next;
  }
  return count;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const countA = countNodes(headA);
  const countB = countNodes(headB);
  let diff = Math.abs(countA - countB);
  let [long, short] = countA - countB < 0 ? [headB, headA] : [headA, headB];
  let ptr = long;

  while (diff > 0) {
    ptr = ptr && ptr.next;
    diff--;
  }

  while (ptr != null && short != null) {
    if (ptr == short) return ptr;
    ptr = ptr.next;
    short = short.next;
  }
  return null;
};