export class Person {
  constructor(firstName, middleName, lastName, birthDate) {
    this.firstName = firstName ?? "John";
    this.middleName = middleName ?? "Q.";
    this.lastName = lastName ?? "Doe";
    this.birthDate = birthDate ?? new Date(1990, 1, 1);
  }

  fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  age() {
    return new Date().getFullYear() - this.birthDate.getFullYear();
  }

  toString() {
    return this.fullName();
  }
}

export class Teacher extends Person {
  constructor(firstName, middleName, lastName, birthDate, schoolName) {
    super(firstName, middleName, lastName, birthDate);
    this.schoolName = schoolName ?? "unknown";
  }

  fullName() {
    return `${super.fullName()} @ ${this.schoolName}`;
  }
}

export function getFirstAndLastLetters(test) {
  
  return {
    first: test.at(0),
    last: test.at(-1),
  };
}

export function getReverse(test) {
  return [...test].reverse().join("");
}

export function getCapitalized(test) {
  return test.map(t => t.toUpperCase());
}

export function getOddCapitalized(test) {
  return test.map((t, i) => (i % 2 === 1 ? t.toUpperCase() : t));
}

export const getFibonacci = n => {
  if (!Number.isInteger(n) || n < 0) {
    return -1;
  }

  if (n === 0 || n === 1) {
    return n;
  }

  return getFibonacci(n - 1) + getFibonacci(n - 2);
};

export function* getFibonacciSequence() {
  let i = 0;
  while (i >= 0) {
    yield getFibonacci(i);

    i += 1;
  }
}

export function getCopyOfArray(a) {
  return [...a];
}

export function getJsonWithNiceFormattingAndNoNumbers(obj) {
  return JSON.stringify(
    obj,
    (k, v) => {
      return typeof v === "number" ? undefined : v;
    },
    2,
  );
}

export function getPropertyNames(obj) {
  for (const objKey in obj) {
    return objKey.property();
  }
}

export function* getPropertyValues(obj) {
  for (const objKey in obj) {
    yield objKey;
  }
}

export function divide(numerator, denominator) {
  if (denominator === 0)
  {
    return "Error";
  }
  return numerator / denominator;
}

export function strictDivide(numerator, denominator) {
  if (denominator === 0) {
    throw Error("Cannot divide by zero.");
  }

  return divide(numerator, denominator);
}

export function safeDivide(numerator, denominator) {
  try {
    strictDivide(numerator, denominator);
  } catch {
    return NaN;
  }
}

export function getObjectWithAOnly(obj) {
  return obj;
}

export function getObjectWithAllButA(obj) {
  return obj;
}
