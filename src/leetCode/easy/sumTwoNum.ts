/* eslint-disable prettier/prettier */
// Brute Force
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// Why is this not a good solution?

// Typically, brute force solutions are easy to implement, and will always find
// a solution if one exist. But the tradeoff tends to be that they are computationally expensive,
//  and may only even be implementable if we know that the size of the inputs are relatively small.

// This algorithm can take a LONG time. In fact, in Big O notation, it’s quadratic, or O(n) squared time because,
//  at worse case, we’d have to look at every single element of this array and do an operation of every other element of the array.

// A nested loop tends to be a sign of optimization opportunities. So, how can we make it better?

console.log('case 1', twoSum([2, 7, 11, 15], 9));
console.log('case 2', twoSum([3, 2, 4], 6));
console.log('case 3', twoSum([3, 3], 6));
console.log('case 4', twoSum([3, 2, 3], 6));

//hash map
const twoSumSoluationTwo = (nums: number[], target: number): number[] => {
  const numKey: number | any = {};
  for (let i = 0; i < nums.length; i++) {
    const val: number = target - nums[i];

    // console.log(numKey[val]);
    if (numKey[val as unknown as keyof number] !== undefined) {
      return [numKey[val], i];
    }
    // console.log((numKey[nums[i]] = i));
    numKey[nums[i]] = i;
  }
  return [];
};

// every algorithm has a trade off. A more efficient solution in terms of time, has the tradeoff that,

// a) It requires more memory (i.e. space)

// b) It’s a bit harder to conceptualize

// this approach takes each number, and looks for the number which when added to itself,
// would equalize the target (i.e the complement). For each number in the array, it creates this complement variable.
// If that complement number exists in the key:value object called numObj we created (i.e, it’s not undefined),
//  then great! Return that number’s position in the object along with the position of number we’re looking at,

console.log('case 1,sol 2', twoSumSoluationTwo([2, 7, 11, 15], 9));
console.log('case 2,sol 2', twoSumSoluationTwo([3, 2, 4], 6));
console.log('case 3,sol 2', twoSumSoluationTwo([3, 3], 6));
console.log('case 4,,sol 2', twoSumSoluationTwo([3, 2, 3], 6));
