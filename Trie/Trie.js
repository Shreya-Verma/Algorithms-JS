import Node from "./Node.js";

export default class Trie {
  constructor() {
    this.root = new Node(null); // Root Node
    this.wordCount = 0;
  }
  //Insert a word in the Trie
  insert(word) {
    if (!word) return;
    word = word.toString().toLowerCase(); //characters are stored in lowercase
    let current = this.root;

    // iterate through all the characters of word
    for (let chr of word) {
      // if node doesn't have the current character as child, insert it
      if (!current.children[chr]) {
        current.children[chr] = new Node(chr);
      }
      // move down, to insert next character
      current = current.children[chr];
    }
    // mark the last inserted character as end of the word
    current.markAsLeaf();
    this.wordCount += 1;

    return this;
  }

  //Search for a given word in the Trie
  search(word) {
    if (!word) return false;
    word = word.toString().toLowerCase();
    let current = this.root;
    for (let chr of word) {
      if (!current.children[chr]) {
        //character not present in char map
        return false;
      }
      //move to next char of word
      current = current.children[chr];
    }
    // found all characters, return true if last character is end of a word
    if (current != null && current.isEndWord) {
      return true;
    }
    return false;
  }

  //Remove a given word from the Trie
  remove(word) {
    if (!this.root || !word) return false;
    word = word.toString().toLowerCase();

    let current = this.root;
    const chain = [];
    //Traverse  Trie
    for (let chr of word) {
      if (!current.children[chr]) {
        //character not present in char map
        return false;
      }
      //move to next char of word
      chain.push(current);
      console.log(chain);
      current = current.children[chr];
    }

    //if the current node has children, then unmark the current node as children
    if (Object.keys(current.children).length > 0) {
      // if any children, we should only change isEndWord flag
      current.unMarkAsLeaf();
      this.wordCount -= 1;
      return this;
    }

    // Zero children in node, continue until we hit a breaking condition
    let child = chain.length ? chain.pop() : null; // whatever node was

    let parent = chain.length ? chain.pop() : null; // if node has parent

    while (true) {
      child && parent && delete parent.children[child.char]; // remove child;

      if (Object.keys(parent.children).length || !chain.length) {
        // if more children or chain is empty, we're done!
        current.unMarkAsLeaf();
        this.wordCount -= 1;
        return this;
      }
      // otherwise, we have no more children for our parent and we should keep deleting nodes
      // our next parent is what we pop from the chain
      // our child is what our parent was.
      child = parent;
      parent = chain.pop();
    }
  }
}
