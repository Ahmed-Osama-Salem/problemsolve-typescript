/* eslint-disable prettier/prettier */
var singleNumber = function (nums) {
    var singleNum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            singleNum ^= nums[i];
        }
    }
    console.log(singleNum);
    return singleNum;
};
console.log(singleNumber([4, 1, 2, 1, 2]));
