/* eslint-disable prettier/prettier */
function removeDuplicates(nums: number[]): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k++] = nums[i];
    }
  }
  [...new Set(nums)];
  console.log(nums);
  console.log(k);

  return k;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
