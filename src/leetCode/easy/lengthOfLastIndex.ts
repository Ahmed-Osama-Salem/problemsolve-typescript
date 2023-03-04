/* eslint-disable prettier/prettier */
function lengthOfLastWord(s: string): number {
  const strLen = s.trim();
  const splitStr = strLen.split(' ');
  return splitStr.slice(-1).toString().length;
}

console.log(lengthOfLastWord('   fly me   to   the moon  '));
