/**
 * You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed
Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]

OR

 Given a list of 50 states, Case-insenitive.
 How can we increase the participants' typing speed and help them decrease the number of keystrokes to fill in the state?
 */

//Make node Constructor
function TNode(char) {
  this.char = char;
  this.isEndOfWord = false;
  this.children = {};
}

// Autocomplete Constructor
function AutoComplete(states) {
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

/**
 * AUTO COMPLETE
 */

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const autoComplete = new AutoComplete(states);
console.log(autoComplete);

const state_box = document.getElementById("state_box");
const list = document.getElementById("list");

const onKeyUp = (e) => {
  let keyVal = e.target.value;
  let preditions = [];
  if (keyVal) {
    // add predictions to ul
    preditions = autoComplete.getSuggestions(keyVal);
    console.log(preditions);
    list.innerHTML = "";
    if (preditions) {
      for (let state of preditions) {
        list.innerHTML += `<li>${state}</li>`;
      }
    }
  } else {
    list.innerHTML = "";
  }
};

const debounce = (func, time = 500) => {
  let debounceTimer;
  return (args) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(args), time);
  };
};

//ADD EVENT LISTENER
state_box.addEventListener("keyup", debounce(onKeyUp, 500), false);
