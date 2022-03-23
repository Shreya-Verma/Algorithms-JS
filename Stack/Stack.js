export default class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  //PUSH ELEMENT
  push(element) {
    this.items.push(element);
    this.top = element;
    return this.items;
  }
  //POP ELEMENT
  pop() {
    if (!this.isEmpty()) {
      if (this.items.length === 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    }
    return null;
  }

  //GET TOP
  getTop() {
    if (this.items.length === 0) return null;
    return this.top;
  }

  //CHECK ISEMPTY
  isEmpty() {
    return this.top === null || this.items.length === 0;
  }
  //RETURN SIZE
  size() {
    return this.items.length;
  }
}
