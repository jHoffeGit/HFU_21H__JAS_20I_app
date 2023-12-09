import { counter, increment, decrement, createObject } from "./main";
import { expect, test, describe } from "@jest/globals";

test("Test", () => {});

test("counter is initialized to 1", () => {
  expect(counter()).toBe(1);
});

test("increment increases by 1", () => {
  const currentCounter = counter();

  expect(increment()).toBe(currentCounter + 1);
});

test("decrement decreases by 1", () => {
  const currentCounter = counter();

  expect(decrement()).toBe(currentCounter - 1);
});

test("object", () => {
  const testObject = createObject();

  //expect(library.createObject().age).toBe(34);
  expect(testObject.first).toBe("Bob");
  expect(testObject.age).toBe(34);
});

test("Nullesche Operatoren", () => {
  const person = createObject();

  expect(person?.first).toBe("Bob");
  expect(person?.middle).toBe(undefined);
  expect(person.company.name ?? "none").toBe("Apple");
  expect(person.company.address ?? "none").toBe("none");
});

test("Spread Operatoren", () => {
  const person = createObject();

  const personCopy = { ...person };
  person.first = "not Bob";
  expect(personCopy.first).toBe("Bob");

  const personEdited = {
    ...person,
    last: "Doe",
    age: 15,
  };
  expect(personEdited.first).toBe("not Bob");
  expect(personEdited.last).toBe("Doe");
  expect(personEdited.age).toBe(15);
  expect(personEdited.company.name).toBe("Apple");
});

test("Destructuring", () => {
  const person = createObject();

  const { first: vorname, last: nachname, age: alter } = person;

  expect(vorname).toBe("Bob");
  expect(nachname).toBe("Hoffmann");
  expect(alter).toBe(34);
});

test("Switch Statement", () => {
  expect(switchStatement(41)).toBe(1);
  expect(switchStatement(42)).toBe(2);
  expect(switchStatement(17)).toBe(3);
});

function switchStatement(x) {
  let y = 0;
  switch (x) {
    case 41:
      y = 1;
      break;
    case 42:
      y = 2;
      break;
    default:
      y = 3;
  }
  return y;
}

test("For...in Schleife", () => {
  const o = { a: 1, b: 2, c: 3 };
  let sum = 0;

  for (const property in o) {
    console.log(o[property]);
    sum = sum + o[property];
  }

  expect(sum).toBe(6);
});

test("For...of Schleife", () => {
  const myArray = [1, 2, 3];
  let sum = 0;

  for (const element of myArray) {
    sum = sum + element;
  }

  expect(sum).toBe(6);
});

test("Get und Set", () => {
  const person = {
    _age: 34,

    get age() {
      return this._age;
    },

    set age(a) {
      this._age = a - 10;
    },
  };

  person.age = 42;

  expect(person.age).toBe(32);
});

test("String Funktionen", () => {
  const myString = "abcooof";
  const regex = /o+f/;

  const found = myString.match(regex);

  expect(found.index).toBe(3);

  const mystring2 = "  test  ";
  expect(mystring2.trim()).toBe("test");
  expect(mystring2.trimEnd()).toBe("  test");
  expect(mystring2.trimStart()).toBe("test  ");
});
