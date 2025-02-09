@param {number} fahrenheit
@returns {number} 

function convertToCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function describeTemperature (celsius) {

    if (celsius < 0) {
        return "very cold";
    } else if (celsius < 20) {
        return "cold";
    } else if (celsius < 30) {
        return "warm";
    } else if (celsius < 40) {
        return "hot";
    } else {
        return "very hot";
    }
}

const fahrenheit = parseFloat(prompt("Enter temperature in fahrenheit:"));
const celsius = convertToCelsius(fahrenheit);
const description = describeTemperature(celsius);

alert(`The temperature is ${celsius.toFixed(2)}, which feels ${description}.`);