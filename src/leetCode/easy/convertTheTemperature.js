/* eslint-disable prettier/prettier */
function convertTemperature(celsius) {
    var Kelvin = celsius + 273.15;
    var Fahrenheit = celsius * 1.8 + 32.0;
    return [Kelvin, Fahrenheit];
}
console.log('case 1', convertTemperature(36.5));
console.log('##########################');
console.log('case 2', convertTemperature(122.11));
console.log('##########################');
