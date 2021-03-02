// given a sentence, please reverse the characters within the sentence while leaving the words
//  in the sentence. You can assume all characters are standard UTF-8 and you can ignore punctuation.
//    You can also assume for simplicity that you can fit the entire sentence in memory.
//      Lastly for simplicity, you can assume that there will only ever be one space between each word
//       (so you don't have to worry about mismatched amounts of white space).

function reverseCharactersButNotWords(sentence) {
  // For quick testing it is easier to return an array than console.log output.
  let res = '';

  const splitSentence = sentence.split(' ');

  const arrayOfReversedWords = splitSentence.map((word) => {
    const chArray = word.split('');
    const reverse = chArray.reverse();
    return reverse.join('');
  });

  arrayOfReversedWords.forEach((word, index) => {
    if (index == arrayOfReversedWords.length - 1) {
      res += word;
    }
    else {
      res += `${word} `;
    }
  });

  return res;
}

export { reverseCharactersButNotWords };
