/* eslint-disable prettier/prettier */
function isPalindrome(s) {
    var cleanStr = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ',' || s[i] === ':' || s[i] === ' ') {
            cleanStr += '';
        }
        else {
            cleanStr += s[i];
        }
    }
    var lowerStr = cleanStr.toLowerCase();
    var revStr = lowerStr.split('');
    var newStr = revStr.join('').trim();
    console.log(lowerStr);
    console.log(newStr);
    if (lowerStr === newStr) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome('a.'));
