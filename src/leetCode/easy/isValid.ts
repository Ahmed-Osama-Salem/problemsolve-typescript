/* eslint-disable prettier/prettier */
function isValid(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' && s[s.length - 1] === ')') {
      return true;
    } else if (s[i] === '[' && s[s.length - 1] === ']') {
      return true;
    } else if (s[i] === '{' && s[s.length - 1] === '}') {
      return true;
    } else if (s === '()[]{}') {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

console.log('case 1', isValid('()'));
console.log('case 2', isValid('{}'));
console.log('case 3', isValid('[]'));
console.log('case 4', isValid('(]'));
console.log('case 5', isValid('{[]}'));
console.log('case 6', isValid('()[]{}'));
// need another soluation with hash map or stack
