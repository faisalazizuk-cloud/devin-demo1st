function validateNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
        throw new TypeError('Both arguments must be valid numbers');
    }
}

function add(a, b) {
    validateNumbers(a, b);
    return a + b;
}

function subtract(a, b) {
    validateNumbers(a, b);
    return a - b;
}

module.exports = { add, subtract };
