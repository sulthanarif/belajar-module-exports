// celcius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}

// fahrenheit to celcius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// module.export
module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius
}