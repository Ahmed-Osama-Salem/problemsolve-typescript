/* eslint-disable prettier/prettier */
function isPalindrome(s: string): boolean {
  let cleanStr = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ',' || s[i] === ':' || s[i] === ' ') {
      cleanStr += '';
    } else {
      cleanStr += s[i];
    }
  }
  const lowerStr = cleanStr.toLowerCase();
  const revStr = lowerStr.split('').reverse();
  const newStr = revStr.join('').trim();
  console.log(lowerStr);
  console.log(newStr);

  if (lowerStr === newStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('a.'));
