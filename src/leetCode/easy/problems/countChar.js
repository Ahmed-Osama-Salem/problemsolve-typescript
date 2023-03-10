/* eslint-disable prettier/prettier */
var countChar = function (str) {
    var space = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (isAlphaNumeric(char)) {
            space[char] = ++space[char] || 1;
        }
    }
    return space;
};
console.log(countChar('hello  '));
function isAlphaNumeric(char) {
    var code, i, len;
    for (i = 0, len = char.length; i < len; i++) {
        code = char.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) {
            // lower alpha (a-z)
            return false;
        }
    }
    return true;
}
