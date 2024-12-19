function convertUnits() {
    // Temperature Conversion
    const tempInput = parseFloat(document.getElementById('temperatureInput').value);
    const tempType = document.querySelector('input[name="tempType"]:checked').value;
    let tempResult;

    if (!isNaN(tempInput)) {
        if (tempType === "CtoF") {
            tempResult = (tempInput * 9 / 5) + 32;
            console.log(`Converted Temperature: ${tempInput}°C = ${tempResult.toFixed(2)}°F`);
        } else {
            tempResult = (tempInput - 32) * 5 / 9;
            console.log(`Converted Temperature: ${tempInput}°F = ${tempResult.toFixed(2)}°C`);
        }
    } else {
        console.log("No valid temperature input provided.");
    }

    // Mass Conversion (Kilograms to Pounds)
    const massInput = parseFloat(document.getElementById('massInput').value);
    let massResult;

    if (!isNaN(massInput)) {
        massResult = massInput * 2.20462;
        console.log(`Converted Mass: ${massInput} kg = ${massResult.toFixed(2)} lbs`);
    } else {
        console.log("No valid mass input provided.");
    }

    // Height Conversion (Meters to Feet)
    const heightInput = parseFloat(document.getElementById('heightInput').value);
    let heightResult;

    if (!isNaN(heightInput)) {
        heightResult = heightInput * 3.28084;
        console.log(`Converted Height: ${heightInput} m = ${heightResult.toFixed(2)} ft`);
    } else {
        console.log("No valid height input provided.");
    }

    // Display Results in Page
    document.getElementById('resultOutput').innerHTML = `
        ${!isNaN(tempInput) ? `Temperature: ${tempResult.toFixed(2)}` : ''}<br>
        ${!isNaN(massInput) ? `Mass: ${massResult.toFixed(2)} lbs` : ''}<br>
        ${!isNaN(heightInput) ? `Height: ${heightResult.toFixed(2)} ft` : ''}
    `;
}