function countLetters(string) {
  var characters = {}
  for (var i = 0; i < string.length; i++) {
    var letters = string[i];
    if (letters === ' ') {
      continue;
    } else if (characters[letters] === undefined) {
      characters[letters] = [i];
    } else {
      characters[letters].push(i);
    }
  } return characters;
}

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("I love lighthouse labs"));