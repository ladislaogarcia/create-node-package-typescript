import { describe, expect, test } from '@jest/globals';

import { Greetings } from './../src/index';

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
