// https://leetcode.com/problems/remove-element/
function removeElement(nums: number[], val: number): number {
  let slowPointer = 0;
  for (let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
      // Do you want to write this elem at this position(slowPtr)
      if(nums[fastPointer] !== val) {
        nums[slowPointer] = nums[fastPointer];
        slowPointer++;
      }
  }
  return slowPointer;
};

