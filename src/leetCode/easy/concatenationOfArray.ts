/* eslint-disable prettier/prettier */
//pseudocode
//first --> store arr of nums in another variable
//second --> concat arr1 in arr2

function getConcatenation(nums: number[]): number[] {
  const ans: number[] = nums;
  return ans.concat(nums);
}

console.log('case 1', getConcatenation([1, 2, 3, 6]));
console.log('##########################');
console.log('case 2', getConcatenation([1, 2, 3, 6, 7, 8, 9, 10]));
console.log('##########################');
console.log('case 3', getConcatenation([1, 12, 53, 36, 55, 89, 88]));
