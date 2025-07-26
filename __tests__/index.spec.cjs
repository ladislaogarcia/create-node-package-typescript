const { describe, expect, test } = require('@jest/globals');

const { Greetings } = require('./../dist/index.cjs');

describe('Greetings CommomJS', () => {
  test('Greetings to somebody ', () => {
    const name = 'Salvador';
    const testGreetings = Greetings(name);
    const specGreetings = `Hello, ${name} !!!`;
    expect(testGreetings).toEqual(specGreetings);
  });

  test('Greetings to nobody', () => {
    const name = 'Noname';
    const testGreetings = Greetings();
    const specGreetings = `Hello, ${name} !!!`;
    expect(testGreetings).toEqual(specGreetings);
  });
});
