/* eslint-disable prettier/prettier */
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const len = m + n;
  nums1.splice(len - n);
  console.log(nums1, 'splice');

  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort((a, b) => a - b);
}

// nums1
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
