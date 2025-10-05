function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function del() {
    let value = document.getElementById('result').value;
    document.getElementById('result').value = value.substr(0, value.length - 1);
}

function calculate() {
    let x = document.getElementById('result').value;
    try {
        // Using eval() for simplicity. It's not recommended for production environments due to security risks.
        let y = eval(x);
        document.getElementById('result').value = y;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}