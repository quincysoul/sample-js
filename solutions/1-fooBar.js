// describe("fooBar - produce a system that can vary its output based upon a specific count." +
//   "This output should vary depending on if the count is current at 2, 3 or 6" +
//   "any number divisible thereby.  If the count is not at a number divisible by 2, 3 or 6 it should print the counter," +
//   "otherwise print foo when the count is divisible by 2, print bar when its divisible by 3 or print baz when its divisible by 6." +
//   "This cannot be hard coded, please generate a function that does this.  The system in theory counts forever printing values," +
//   "but you dont have to worry about memory management or anything like that.", () => {

function fooBar(maximum_index = 10000, justPrint = false) {
  // For quick testing it is easier to return an array than console.log output.
  const res = [];
  let count_to_2 = 0;
  let count_to_3 = 0;
  const foo = 'foo';
  const bar = 'bar';
  const baz = 'baz';

  let i = 1;
  while (i <= maximum_index) {
    count_to_2++;
    count_to_3++;
    if (count_to_2 === 2 && count_to_3 === 3) {
      if (justPrint) {
        console.log(baz);
      }
      else {
        res.push(baz);
      }
      count_to_2 = 0;
      count_to_3 = 0;
    }
    else if (count_to_2 == 2) {
      if (justPrint) {
        console.log(foo);
      }
      else {
        res.push(foo);
      }
      count_to_2 = 0;
    }
    else if (count_to_3 == 3) {
      if (justPrint) {
        console.log(bar);
      }
      else {
        res.push(bar);
      }
      count_to_3 = 0;
    }
    else {
      res.push(i);
    }
    i++;
  }

  return res;
}

export { fooBar };
