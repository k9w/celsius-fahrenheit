// formula: (0°C × 9/5) + 32 = 32°F
function celsiusToFahrenheit(celsiusInput) {
  return celsiusInput * 9 / 5 + 32;
}

// formula: (32°F − 32) × 5/9 = 0°C
function fahrenheitToCelsius(fahrenheitInput) {
  return (fahrenheitInput - 32) * 5 / 9;
}

const celsiusInput = parseInt(prompt("Enter a temperature in Celsius:"));
const fahrenheitOutput = celsiusInput + ' degrees C is ' + celsiusToFahrenheit(celsiusInput) + ' degrees F.';

const fahrenheitInput = parseInt(prompt("Enter a temperature in Fahrenheit:"));
const celsiusOutput = fahrenheitInput + ' degrees F is ' + fahrenheitToCelsius(fahrenheitInput) + ' degrees C.';

alert(fahrenheitOutput + '\n' + celsiusOutput);
