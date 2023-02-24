/* eslint-disable prettier/prettier */
function plusOne(digits: number[]): number[] {
  let digtStr = '';
  const finalArray = [];
  for (let i = 0; i < digits.length; i++) {
    digtStr += digits[i];
  }
  const digtNum = Math.round(parseFloat(digtStr) + 1);
  const strArray = digtNum.toString().split('');

  for (let j = 0; j < strArray.length; j++) {
    finalArray.push(parseFloat(strArray[j]));
  }

  return finalArray;
}

console.log(
  'case 1',
  plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
);
