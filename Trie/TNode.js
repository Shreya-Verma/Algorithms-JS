export default class TNode {
  constructor(char) {
    this.char = char; // Each Character
    this.isEndWord = false; // Marks end of word
    this.children = {};
  }

  markAsLeaf() {
    this.isEndWord = true;
  }
  unMarkAsLeaf() {
    this.isEndWord = false;
  }
}
