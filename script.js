let lastResult = 0; // Variable para almacenar el último resultado
let mode = 'degrees'; // Modo predeterminado

function setMode(newMode) {
    mode = newMode;
}

function appendToDisplay(value) {
    const display = document.getElementById('pantalla');
    if (display.value === "Error" || display.value === "NaN") {
        display.value = ''; // Limpiar la pantalla si hay un error
    }
    display.value += value; // Añadir el valor presionado a la pantalla
}

function clearDisplay() {
    document.getElementById('pantalla').value = ''; // Limpiar la pantalla
}

function deleteLast() {
    const display = document.getElementById('pantalla');
    display.value = display.value.slice(0, -1); // Borrar el último carácter de la pantalla
}

function calculateResult() {
    const display = document.getElementById('pantalla');
    try {
        // Evaluar la expresión, reemplazando 'x' por '*'
        const result = eval(display.value.replace(/x/g, '*'));
        if (result === undefined || result === null) {
            throw new Error("Invalid calculation"); // Manejo de errores
        }
        lastResult = result; // Guardar el último resultado
        display.value = result; // Mostrar el resultado en la pantalla
    } catch (error) {
        display.value = "Error"; // Mostrar mensaje de error si hay un problema
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('pantalla');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = Math.sqrt(value);
        display.value = result;
    }
}

function calculateReciprocal() {
    const display = document.getElementById('pantalla');
    const value = parseFloat(display.value);
    if (!isNaN(value) && value !== 0) {
        const result = 1 / value;
        display.value = result;
    } else {
        display.value = "Error"; // Mostrar mensaje de error si se intenta dividir entre cero
    }
}

function calculateCubed() {
    const display = document.getElementById('pantalla');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = Math.pow(value, 3);
        display.value = result;
    }
}

function calculateNCR() {
    const display = document.getElementById('pantalla');
    const values = display.value.split(',').map(Number);
    if (values.length === 2 && !isNaN(values[0]) && !isNaN(values[1])) {
        const n = values[0];
        const r = values[1];
        const result = factorial(n) / (factorial(r) * factorial(n - r));
        display.value = result;
    } else {
        display.value = "Error"; // Mensaje de error si la entrada no es válida
    }
}

function calculateNaturalLog() {
    const display = document.getElementById('pantalla');
    const value = parseFloat(display.value);
    if (!isNaN(value) && value > 0) { // ln solo se puede calcular para números positivos
        const result = Math.log(value);
        display.value = result;
    } else {
        display.value = "Error"; // Mostrar mensaje de error si la entrada no es válida
    }
}

function factorial(num) {
    if (num < 0) return 0; // Factorial no está definido para números negativos
    if (num === 0) return 1; // 0! es 1
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Modificar las funciones trigonométricas para tener en cuenta el modo
function calculateSine(value) {
    if (mode === 'degrees') {
        return Math.sin(value * (Math.PI / 180)); // Convierte a radianes
    }
    return Math.sin(value); // Radianes
}

function calculateCosine(value) {
    if (mode === 'degrees') {
        return Math.cos(value * (Math.PI / 180));
    }
    return Math.cos(value);
}

function calculateTangent(value) {
    if (mode === 'degrees') {
        return Math.tan(value * (Math.PI / 180));
    }
    return Math.tan(value);
}
