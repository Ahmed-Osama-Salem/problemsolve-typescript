/* eslint-disable prettier/prettier */
function finalValueAfterOperations(operations) {
    var X = 0;
    for (var i = 0; i < operations.length; i++) {
        if (operations[i] === '++X' || operations[i] === 'X++') {
            operations[X++];
        }
        else if (operations[i] === '--X' || operations[i] === 'X--') {
            operations[X--];
        }
        operations[i];
    }
    return X;
}
console.log('case 1', finalValueAfterOperations(['X++', '++X', '--X', 'X--']));
console.log('##########################');
console.log('case 2', finalValueAfterOperations(['++X', '++X', 'X++']));
console.log('##########################');
console.log('case 2', finalValueAfterOperations(['--X', 'X++', 'X++']));
