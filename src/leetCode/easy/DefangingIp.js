/* eslint-disable prettier/prettier */
function defangIPaddr(address) {
    var splitStr = address.split('');
    console.log(splitStr, 'array');
    var joinStr = '';
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === '.') {
            //   splitStr[i] = splitStr[i].replace(splitStr[i], '[.]');
            joinStr += '[.]';
        }
        else {
            joinStr += splitStr[i];
        }
    }
    return joinStr;
}
console.log('case 1', defangIPaddr('1.1.1.1'));
