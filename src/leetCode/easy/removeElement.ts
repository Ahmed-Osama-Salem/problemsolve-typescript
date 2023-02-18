/* eslint-disable prettier/prettier */
function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }

  return k;
}

removeElement([3, 2, 2, 3], 3);
console.log('##########################');
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
