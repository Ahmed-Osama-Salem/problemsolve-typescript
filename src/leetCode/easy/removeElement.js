function removeElement(nums, val) {
    var k = nums.filter(function (n) {
        if (n !== val) {
            console.log(n);
            return n.toFixed();
        }
        else {
            return 0;
        }
    });
    console.log(k, 'result');
    console.log(k.length, 'result');
    return k.length;
}
removeElement([3, 2, 2, 3], 3);
console.log('##########################');
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
