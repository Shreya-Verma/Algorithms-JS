export default class BNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  get isLeaf() {
    return this.left === null && this.right === null;
  }
  get hasChildren() {
    return !this.isLeaf;
  }
}
