/* eslint-disable prettier/prettier */
function twoSum(nums, target) {
    var arr = [];
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] + nums[i + 1] === target) {
            arr.push(nums.indexOf(nums[i]), nums.indexOf(nums[i + 1], 1));
            return arr;
        }
    }
}
console.log('case 1', twoSum([2, 7, 11, 15], 9));
console.log('case 2', twoSum([3, 2, 4], 6));
console.log('case 3', twoSum([3, 3], 6));
// const twoSumSoluationTwo = (nums: number[], target: number): number[] => {
//   let array: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//   }
// };
// console.log('case 1,sol 2', twoSumSoluationTwo([2, 7, 11, 15], 9));
// console.log('case 2,sol 2', twoSumSoluationTwo([3, 2, 4], 6));
// console.log('case 3,sol 2', twoSumSoluationTwo([3, 3], 6));
