/* eslint-disable prettier/prettier */
function isPalindrome(s: string): boolean {
  const re = /[\W_]/g;
  const lowRegStr = s.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

console.log(isPalindrome('a.'));
