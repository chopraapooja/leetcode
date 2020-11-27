function searchInsert(nums: number[], target: number): number {
  let posFound = 0;
  for (let index = 0; index < nums.length; index++) {
    const nextElem = (index + 1 < nums.length) ? nums[index + 1] : Number.MAX_VALUE
    if (nextElem > target) {
      posFound = index;
      break;
    }
  }
  return posFound
};