import { fooBar } from '../1-fooBar';

describe('fooBar - produce a system that can vary its output based upon a specific count.'
  + 'This output should vary depending on if the count is current at 2, 3 or 6'
  + 'any number divisible thereby.  If the count is not at a number divisible by 2, 3 or 6 it should print the counter,'
  + 'otherwise print foo when the count is divisible by 2, print bar when its divisible by 3 or print baz when its divisible by 6.'
  + 'This cannot be hard coded, please generate a function that does this.  The system in theory counts forever printing values,'
  + 'but you dont have to worry about memory management or anything like that.', () => {
  test('', () => {
    const foo = 'foo';
    const bar = 'bar';
    const baz = 'baz';
    const expected = [
      1,
      foo,
      bar,
      foo,
      5,
      baz,
      7,
      foo,
      bar,
      foo,
      11];

    expect(fooBar(11)).toEqual(expected);
  });
});
