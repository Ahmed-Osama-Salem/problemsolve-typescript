/* eslint-disable prettier/prettier */
function lengthOfLastWord(s) {
    var strLen = s.trim();
    var splitStr = strLen.split(' ');
    return splitStr.slice(-1).toString().length;
}
console.log(lengthOfLastWord('   fly me   to   the moon  '));
