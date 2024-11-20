function convertTemperature() {
    // Get the input values
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const unit = document.getElementById('unit').value;
    
    if (isNaN(fahrenheit)) {
        document.getElementById('result').innerText = 'Please enter a valid Fahrenheit value.';
        return;
    }

    let convertedTemperature;

    // Convert based on selected unit
    switch (unit) {
        case 'celsius':
            convertedTemperature = (fahrenheit - 32) * 5 / 9;
            document.getElementById('result').innerText = `${fahrenheit}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
            break;
        case 'kelvin':
            convertedTemperature = (fahrenheit - 32) * 5 / 9 + 273.15;
            document.getElementById('result').innerText = `${fahrenheit}°F is equal to ${convertedTemperature.toFixed(2)} K`;
            break;
        case 'rankine':
            convertedTemperature = fahrenheit + 459.67;
            document.getElementById('result').innerText = `${fahrenheit}°F is equal to ${convertedTemperature.toFixed(2)}°R`;
            break;
        default:
            document.getElementById('result').innerText = 'Please select a valid unit.';
            break;
    }
}
