/* eslint-disable prettier/prettier */
function searchInsert(nums, target) {
    var idx = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target && nums.includes(target)) {
            idx = i;
        }
        else if (!nums.includes(target)) {
            nums.push(target);
            nums.sort(function (a, b) { return a - b; });
            idx = nums.indexOf(nums[i]);
        }
    }
    console.log(nums);
    console.log(idx);
    return idx;
}
console.log(searchInsert([1, 3, 5, 6], 7));
