const library = require('./main');
const { test, describe } = require('@jest/globals');


describe('Test', () => {
    it('it', () => {
        expect(library.counter()).toBe(1);
    })
});


it('counter is initialized to 1', () => {
  expect(library.counter()).toBe(1);
});

it('increment increases by 1', () => {
  const currentCounter = library.counter();

  expect(library.increment()).toBe(currentCounter + 1);
});

it('decrement decreases by 1', () => {
  const currentCounter = library.counter();

  expect(library.decrement()).toBe(currentCounter - 1);
});
