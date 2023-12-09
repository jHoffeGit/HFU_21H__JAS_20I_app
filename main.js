let _counter = 1;
let m = 2;
show(_counter + m);

export function counter() {
  return _counter;
}

export function increment() {
  return ++_counter;
}

export function decrement() {
  return --_counter;
}

export function show(value) {
  //console.warn(value);
}

export function createObject() {
  const person = {
    first: "Bob",
    last: "Hoffmann",
    age: 34,
    company: {
      name: "Apple",
    },
  };
  return person;
}

/* export default {
  counter,
  increment,
  decrement,
  createObject
} */
