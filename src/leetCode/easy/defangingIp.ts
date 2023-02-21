/* eslint-disable prettier/prettier */
function defangIPaddr(address: string): string {
  const splitStr = address.split('');
  console.log(splitStr, 'array');
  let joinStr = '';
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === '.') {
      joinStr += '[.]';
    } else {
      joinStr += splitStr[i];
    }
  }
  return joinStr;
}

console.log('case 1', defangIPaddr('1.1.1.1'));
