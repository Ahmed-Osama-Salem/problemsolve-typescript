/* eslint-disable prettier/prettier */
function plusOne(digits) {
    var digtStr = '';
    var finalArray = [];
    for (var i = 0; i < digits.length; i++) {
        digtStr += digits[i];
    }
    var digtNum = Math.round(parseFloat(digtStr) + 1);
    var strArray = digtNum.toString().split('');
    for (var j = 0; j < strArray.length; j++) {
        finalArray.push(parseFloat(strArray[j]));
    }
    return finalArray;
}
console.log('case 1', plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
