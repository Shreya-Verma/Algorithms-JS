//Make node Constructor
function TNode(char) {
  this.char = char;
  this.isEndOfWord = false;
  this.children = {};
}

// Autocomplete Constructor
export default function AutoComplete(states) {
  this.root = this.buildTrie(states);
}
AutoComplete.prototype.buildTrie = function (states) {
  const root = new TNode(null);
  for (let state of states) {
    this.insert(root, state);
  }
  return root;
};
AutoComplete.prototype.insert = function (current, word) {
  word = word.toLowerCase();
  for (let char of word) {
    if (current.children[char] === undefined) {
      current.children[char] = new TNode(char);
    }
    current = current.children[char];
  }
  current.isEndOfWord = true;
};

AutoComplete.prototype.isStartsWith = function (input) {
  let node = this.root,
    found = true,
    word = "";
  input = input.toLowerCase();
  for (const char of input) {
    if (node.children[char]) {
      node = node.children[char];
      word += char;
    } else {
      found = false;
      break;
    }
  }
  return {
    node: found ? node : null,
    word,
  };
};

AutoComplete.prototype.getSuggestions = function (input = null) {
  if (!input) return [];
  const { node, word } = this.isStartsWith(input);
  if (!node) return [];
  const words = [];
  if (node.isEndOfWord) {
    words.push(word);
  }
  return words.concat(this.dfs(word, node));
};

AutoComplete.prototype.dfs = function (prefix, node) {
  if (!node) return;
  let words = [];
  for (let char in node.children) {
    if (node.children[char].isEndOfWord) {
      words.push(prefix + char);
    }
    words = [...words, ...this.dfs(prefix + char, node.children[char])];
  }

  return words;
};
