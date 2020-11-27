function findMax(arr, start, end): { max: number, s_max: number } {
  let max, s_max;
  for (let i = start; i < end; i++) {
    if (arr[i] >= max) {
      s_max = max;
      max = arr[i];
    }
  }
  return {
    max,
    s_max
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  let { max, s_max } = findMax(nums, 0, k);
  let result = [max];
  const length = nums.length - (k - 1);
  for (let i = 1; i < length; i++) {
    const lostElem = nums[i - 1];
    const gainedElem = nums[i + (k - 1)];
    const maxToConsider = lostElem === max ? s_max : max;
    const maxInWindow = gainedElem > maxToConsider ? gainedElem : maxToConsider;
    result = [...result, maxInWindow];
  }
};