const {square} = require('./square');

test('square 5 to get 25', () => {
expect(square(5)).toBe(25);
});

test('square 10 to get 100', () => {
expect(square(10)).toBe(100);
});