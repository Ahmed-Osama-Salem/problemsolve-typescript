/* eslint-disable prettier/prettier */
function buildArray(nums: number[]): number[] {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
    console.log(nums[nums[i]]);
  }
  return ans;
}

console.log('case 1', buildArray([0, 2, 1, 5, 3, 4]));
console.log('case 1', buildArray([5, 0, 1, 2, 3, 4]));

// Idea:
// The main idea to solve this problem is to use basic maths.
// We’ll modify every nums[i] to nums[i] = (old value)*n + new value.
// If we want to get the old value, old value = nums[i]/n.
// If we want to get the new value, new value = nums[i]%n.
// Iterate in the original input array and multiply every number by n.
// Again, iterate in the array and transform nums[i] according to the formulae mentioned in step 2.
// And, to store new values in the same array, use the formulae mentioned in step3 to get the new values at each index.
