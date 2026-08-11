const display = document.getElementById('result');

function appendToResult(value) {
    display.value += value;
}

function clearResult() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        expression = expression.replace(/X/g, '*');
        expression = expression.replace(/(\d+(\.\d+)?)\s*([+\-])\s*(\d+(\.\d+)?)%/g, '$1 $3 ($1 * $4 / 100)');
        expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1 / 100)');
        
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Erro';
    }
}
