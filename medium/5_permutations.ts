function rest(arr: number[], num: number) {
  return arr.filter(n => n != num);
}

function permute(nums: number[]): number[][] {
  if (nums.length <= 1) return [nums];

  let result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    const restPermute = permute(rest(nums, nums[i]));
    const applied = restPermute.map(list => [nums[i], ...list]);
    result = [...result, ...applied]
  }
  return result;
};
