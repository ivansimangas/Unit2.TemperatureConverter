@param {number} fahrenheit
@returns {number} 

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function describeTemperature(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;

    if (celsius < 0){
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

const fahrenheit = parseFloat(prompt("Please enter a temperature in Fahrenheit:"));

const celsius = convertToCelsius(fahrenheit);

const description = describeTemperature(fahrenheit);

alert(`The temperature is ${celsius.toFixed(2)}°C, which feels ${description}.`);
