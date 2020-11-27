function removeDuplicates(nums: number[]): number {
  let last, i = 0;

  while (i < nums.length) {
    if (last === nums[i]) { nums.splice(i, 1) } else { last = nums[i], i++; }
  }

  return nums.length;
};
