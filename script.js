let resultField = document.getElementById('result');

function appendCharacter(char) {
    resultField.value += char;
}

function clearResult() {
    resultField.value = '';
}
function deleteLastCharacter() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

