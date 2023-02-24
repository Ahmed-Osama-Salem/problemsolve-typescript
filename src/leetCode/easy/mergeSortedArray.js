/* eslint-disable prettier/prettier */
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    var len = m + n;
    nums1.splice(len - n);
    console.log(nums1, 'splice');
    for (var i = 0; i < n; i++) {
        nums1.push(nums2[i]);
    }
    nums1.sort(function (a, b) { return a - b; });
}
// nums1
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
