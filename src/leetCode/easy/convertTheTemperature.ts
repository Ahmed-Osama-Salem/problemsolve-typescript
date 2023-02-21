/* eslint-disable prettier/prettier */
function convertTemperature(celsius: number): number[] {
  const Kelvin: number = celsius + 273.15;
  const Fahrenheit: number = celsius * 1.8 + 32.0;
  return [Kelvin, Fahrenheit];
}

console.log('case 1', convertTemperature(36.5));
console.log('##########################');
console.log('case 2', convertTemperature(122.11));
console.log('##########################');
