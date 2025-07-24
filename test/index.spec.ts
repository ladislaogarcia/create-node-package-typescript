import { describe, expect, test } from '@jest/globals';

import { Greetings } from './../src/index';

import { Greetings as GreetingsBuilt } from './../dist/index';

describe('Greetings TS Source', () => {
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

describe('Greetings Built', () => {
  test('Greetings o somebody ', () => {
    const name = 'Salvador';
    const testGreetings = GreetingsBuilt(name);
    const specGreetings = `Hello, ${name} !!!`;
    expect(testGreetings).toEqual(specGreetings);
  });

  test('Greetings to nobody', () => {
    const name = 'Noname';
    const testGreetings = GreetingsBuilt();
    const specGreetings = `Hello, ${name} !!!`;
    expect(testGreetings).toEqual(specGreetings);
  });
});
