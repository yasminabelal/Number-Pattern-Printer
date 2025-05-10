function generatePattern() {
    const inputElement = document.getElementById('numberInput');
    const inputValue = inputElement.value;
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = '';
    outputDiv.classList.remove('error');
    
  
    const number = parseInt(inputValue);
    if (isNaN(number)) {
        showError("Please enter a valid number");
        return;
    }
    
    if (number < 1) {
        showError("Please enter a positive integer (1 or greater)");
        return;
    }
    
    let pattern = '';
    for (let i = number; i >= 1; i--) {
        let line = '';
        for (let j = i; j >= 1; j--) {
            line += j;
        }
        pattern += line + '\n';
    }
    
    outputDiv.textContent = pattern;
}

function showError(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = message;
    outputDiv.classList.add('error');
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('numberInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generatePattern();
        }
    });
    
    document.querySelector('button').addEventListener('click', generatePattern);
});