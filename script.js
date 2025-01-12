document.getElementById('mileageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelUsed = parseFloat(document.getElementById('fuelUsed').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);

    // Validate inputs
    if (distance > 0 && fuelUsed > 0 && fuelPrice > 0) {
        // Calculate mileage and total cost
        const mileage = (distance / fuelUsed).toFixed(2);
        const totalCost = (fuelUsed * fuelPrice).toFixed(2);

        // Display results
        document.getElementById('result').innerHTML = `
            <strong>Mileage:</strong> ${mileage} km/l <br>
            <strong>Total Cost:</strong> ₹${totalCost}
        `;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid inputs.';
    }
});