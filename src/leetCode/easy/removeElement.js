function removeElement(nums, val) {
    var k = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            console.log(nums[k++], 'k++');
            nums[k++] = nums[i];
        }
    }
    return k;
}
removeElement([3, 2, 2, 3], 3);
console.log('##########################');
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
