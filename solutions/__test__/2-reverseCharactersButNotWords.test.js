import { reverseCharactersButNotWords } from '../2-reverseCharactersButNotWords';

describe('fooBar - produce a system that can vary its output based upon a specific count.'
  + 'This output should vary depending on if the count is current at 2, 3 or 6'
  + 'any number divisible thereby.  If the count is not at a number divisible by 2, 3 or 6 it should print the counter,'
  + 'otherwise print foo when the count is divisible by 2, print bar when its divisible by 3 or print baz when its divisible by 6.'
  + 'This cannot be hard coded, please generate a function that does this.  The system in theory counts forever printing values,'
  + 'but you dont have to worry about memory management or anything like that.', () => {
  test('should run on the cat is fat', () => {
    const input = 'the cat is fat';
    const expected = 'eht tac si taf';

    expect(reverseCharactersButNotWords(input)).toEqual(expected);
  });

  test('should work on a sentence with punctuation', () => {
    const input = 'band camp is great!';
    const expected = 'dnab pmac si !taerg';

    expect(reverseCharactersButNotWords(input)).toEqual(expected);
  });
});
