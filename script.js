   // Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners for input synchronization
    setupEventListeners();
    
    // Calculate initial chance with default values
    calculateChance();
});

// Set up all event listeners
function setupEventListeners() {
    // Sync range sliders with number inputs
    document.getElementById('gre-range').addEventListener('input', function() {
        document.getElementById('gre').value = this.value;
        calculateChance();
    });
    
    document.getElementById('gre').addEventListener('input', function() {
        document.getElementById('gre-range').value = this.value;
        calculateChance();
    });
    
    document.getElementById('toefl-range').addEventListener('input', function() {
        document.getElementById('toefl').value = this.value;
        calculateChance();
    });
    
    document.getElementById('toefl').addEventListener('input', function() {
        document.getElementById('toefl-range').value = this.value;
        calculateChance();
    });
    
    document.getElementById('cgpa-range').addEventListener('input', function() {
        document.getElementById('cgpa').value = this.value;
        calculateChance();
    });
    
    document.getElementById('cgpa').addEventListener('input', function() {
        document.getElementById('cgpa-range').value = this.value;
        calculateChance();
    });
    
    // Add event listeners to all inputs
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', calculateChance);
    });
    
    // Predict button event listener
    document.getElementById('predict-btn').addEventListener('click', calculateChance);
}

// Calculate admission chance based on inputs
function calculateChance() {
    // Get values from inputs
    const gre = parseInt(document.getElementById('gre').value);
    const toefl = parseInt(document.getElementById('toefl').value);
    const rating = parseInt(document.getElementById('rating').value);
    const sop = parseInt(document.getElementById('sop').value);
    const lor = parseInt(document.getElementById('lor').value);
    const cgpa = parseFloat(document.getElementById('cgpa').value);
    const research = parseInt(document.getElementById('research').value);
    
    // Calculate base score using a weighted algorithm
    let chance = 0;
    
    // GRE contributes up to 25% (290-340)
    chance += ((gre - 290) / (340 - 290)) * 25;
    
    // TOEFL contributes up to 15% (92-120)
    chance += ((toefl - 92) / (120 - 92)) * 15;
    
    // University Rating contributes up to 10% (1-5)
    chance += ((rating - 1) / (5 - 1)) * 10;
    
    // SOP contributes up to 5% (1-5)
    chance += ((sop - 1) / (5 - 1)) * 5;
    
    // LOR contributes up to 5% (1-5)
    chance += ((lor - 1) / (5 - 1)) * 5;
    
    // CGPA contributes up to 30% (6.8-9.92)
    chance += ((cgpa - 6.8) / (9.92 - 6.8)) * 30;
    
    // Research contributes up to 10% (0 or 1)
    chance += research * 10;
    
    // Ensure chance is between 0 and 100
    chance = Math.max(0, Math.min(100, chance));
    
    // Update UI
    updateResults(chance);
    
    return chance;
}

// Update the UI with the calculated results
function updateResults(chance) {
    const chancePercent = chance.toFixed(1);
    
    document.getElementById('chance-value').textContent = chancePercent + '%';
    document.getElementById('probability-fill').style.width = chancePercent + '%';
    
    // Update message based on chance
    const messageElement = document.getElementById('admission-message');
    if (chance >= 80) {
        messageElement.textContent = 'Excellent chance of admission!';
        messageElement.style.color = '#2ecc71';
    } else if (chance >= 60) {
        messageElement.textContent = 'Good chance of admission!';
        messageElement.style.color = '#f39c12';
    } else if (chance >= 40) {
        messageElement.textContent = 'Moderate chance of admission.';
        messageElement.style.color = '#e67e22';
    } else {
        messageElement.textContent = 'Low chance of admission.';
        messageElement.style.color = '#e74c3c';
    }
}
