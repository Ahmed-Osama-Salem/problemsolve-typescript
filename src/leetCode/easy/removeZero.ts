/* eslint-disable prettier/prettier */
const removeZero = (nums: number[]) => {
  const zeroList = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroList.push(nums[i]);
      nums.splice(i, 1);
      i--;
    }
  }

  nums.push(...zeroList);
};

console.log(removeZero([0, 1, 2, 3, 0, 0]));
//As the items are removed from the array the index still increments and the next item after your matched value is skipped.

// The simple solution is to modify the above example to decrement the index variable so it does not skip the next item in the array.

//pesudo code
//empty list to store zeros.
//loop on nums
//push zeros in zero list
//remove zeros from nums
//finally push zero list to nums list
