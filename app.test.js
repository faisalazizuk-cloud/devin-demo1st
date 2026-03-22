const { add, subtract } = require('./app');

// --- add: happy path ---
test('adds positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
});

test('adds negative numbers correctly', () => {
    expect(add(-3, -7)).toBe(-10);
});

test('adds a negative and a positive number', () => {
    expect(add(-5, 5)).toBe(0);
});

test('adds with zero', () => {
    expect(add(0, 7)).toBe(7);
    expect(add(0, 0)).toBe(0);
});

test('adds floating-point numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
});

// --- subtract: happy path ---
test('subtracts positive numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('subtracts resulting in a negative number', () => {
    expect(subtract(3, 7)).toBe(-4);
});

test('subtracts negative numbers', () => {
    expect(subtract(-3, -7)).toBe(4);
});

test('subtracts with zero', () => {
    expect(subtract(0, 5)).toBe(-5);
    expect(subtract(5, 0)).toBe(5);
});

test('subtracts floating-point numbers', () => {
    expect(subtract(5.5, 2.5)).toBe(3);
});

// --- add: invalid inputs ---
test('add throws on string arguments', () => {
    expect(() => add('2', '3')).toThrow(TypeError);
    expect(() => add('hello', 5)).toThrow(TypeError);
});

test('add throws on null or undefined', () => {
    expect(() => add(null, 5)).toThrow(TypeError);
    expect(() => add(5, undefined)).toThrow(TypeError);
});

test('add throws on boolean arguments', () => {
    expect(() => add(true, 1)).toThrow(TypeError);
    expect(() => add(1, false)).toThrow(TypeError);
});

test('add throws on NaN', () => {
    expect(() => add(NaN, 5)).toThrow(TypeError);
});

test('add throws when arguments are missing', () => {
    expect(() => add(5)).toThrow(TypeError);
    expect(() => add()).toThrow(TypeError);
});

// --- subtract: invalid inputs ---
test('subtract throws on string arguments', () => {
    expect(() => subtract('10', '3')).toThrow(TypeError);
});

test('subtract throws on null or undefined', () => {
    expect(() => subtract(null, 5)).toThrow(TypeError);
    expect(() => subtract(5, undefined)).toThrow(TypeError);
});

test('subtract throws on boolean arguments', () => {
    expect(() => subtract(true, 1)).toThrow(TypeError);
});

test('subtract throws on NaN', () => {
    expect(() => subtract(NaN, 5)).toThrow(TypeError);
});

test('subtract throws when arguments are missing', () => {
    expect(() => subtract(5)).toThrow(TypeError);
    expect(() => subtract()).toThrow(TypeError);
});
