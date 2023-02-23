/* eslint-disable prettier/prettier */
function shuffle(nums: number[], n: number): number[] {
  const numsX = [];
  for (let i = 0; i < n; i++) {
    numsX.push(nums[i], nums[i + n]);
  }

  console.log(numsX, 'numsX');
  return numsX;
}
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
