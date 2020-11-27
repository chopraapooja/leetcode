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

function hasCycle(head: ListNode | null): boolean {
  if (head && head.next) {
    let slow = head, fast = head.next;
    while (fast !== slow) {
      if (!slow || !fast || !slow.next || !fast.next || !fast.next.next) return false;
      slow = slow.next;
      fast = fast.next.next;
    }
    return true;
  }
  return false;
};