/* eslint-disable prettier/prettier */
const singleNumber = (nums: number[]): number => {
  let singleNum = 0;

  for (let i = 0; i < nums.length; i++) {
    singleNum ^= nums[i];
  }

  console.log(singleNum);

  return singleNum;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
