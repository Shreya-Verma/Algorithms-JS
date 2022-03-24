const createCharMap = (chars) => {
  const map = {};
  for (let char of chars) {
    map[char] = ++map[char] || 1;
  }
  return map;
};

const canMakeWord = (word, map) => {
  for (let wChar of word) {
    if (!map[wChar]) {
      return false;
    } else {
      //because the letter cannot be used twice
      map[wChar] -= 1;
    }
  }
  return true;
};

const findGoodString = function (words, chars) {
  let total = 0;
  let originalMap = createCharMap(chars);
  for (let word of words) {
    let map = { ...originalMap };
    if (canMakeWord(word, map)) {
      total += word.length;
    }
  }

  return total;
};

console.log(findGoodString(["cat", "bt", "hat", "tree"], "atach"));
