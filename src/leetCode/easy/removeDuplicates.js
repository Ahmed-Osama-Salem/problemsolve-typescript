var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable prettier/prettier */
function removeDuplicates(nums) {
    var k = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[k++] = nums[i];
        }
    }
    __spreadArray([], new Set(nums), true);
    console.log(nums);
    console.log(k);
    return k;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
