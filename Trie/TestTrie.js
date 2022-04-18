import Trie from "./Trie.js";

let words = ["the", "there", "their", "bat", "ox"];
let trie = new Trie();
console.log(words);

for (let i = 0; i < words.length; i++) {
  trie.insert(words[i]);
}
console.log(trie);

console.log(trie.search("OX"));
console.log(trie.remove("bat"));
