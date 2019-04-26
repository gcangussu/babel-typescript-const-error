/**
 * All of these examples work for Typescript 3.4
 * Only the two first work with Babel
 */

function okForObjects() {
  const a = () => {};
  const b = {};
  return { a, b } as const;
}

function okForStringsAndNumbersDirectly() {
  return ['oi', 42] as const;
}

function notOk() {
  const a = 'oi';
  const b = 42;
  return [a, b] as const;
}

function notOkEither() {
  const a = () => {};
  const b = {};
  return [a, b] as const;
}

function nope() {
  return [() => {}, {}] as const;
}
