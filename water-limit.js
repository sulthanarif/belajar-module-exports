// water-limit.js


// require module
const {celsiusToFahrenheit,
    fahrenheitToCelsius} = require('./converter');

// input dari proses agrv
const degree = process.argv[2];

console.log(`isi angka ${degree}`);

// proses function dari module
const fahrenheitFromCelcius = celsiusToFahrenheit(+degree);

const celsiusFromFahrenheit = fahrenheitToCelsius(fahrenheitFromCelcius);

// tampilakan hasil
console.log(`input ${degree}, hasil pertama ${fahrenheitFromCelcius}, hasil kedua ${celsiusFromFahrenheit}`);