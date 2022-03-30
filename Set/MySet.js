// new Set() – creates the set.
// set.add(value) – stores the value.
// set.has(value) – returns true if the value exists, false otherwise.
// set.delete(key) – removes the value and return true or false.
// set.clear() – removes everything from the set.
// set.size – returns the current element count.

export default class MySet {
  constructor(it = null) {
    this.set = [];
    this.size = 0;

    if (it && it.length > 0) {
      for (let val of it) {
        this.add(val);
      }
    }
  }

  add(value) {
    if (!this.has(value)) {
      this.set.push({ value: value });
      this.size++;
    }
  }

  has(value) {
    for (let el of this.set) {
      if (el.value === value) return true;
    }
    return false;
  }

  getIndex(value) {
    let index = -1;
    for (let i = 0; i < this.size; i++) {
      if (this.set[i].value === value) {
        index = i;
        break;
      }
    }
    return index;
  }

  delete(value) {
    let index = this.getIndex(value);
    if (index !== -1) {
      this.set.splice(index, 1);
      this.size--;
    }
  }

  clear() {
    this.set = [];
    this.size = 0;
  }

  [Symbol.iterator]() {
    let counter = 0;
    return {
      next: () => {
        while (counter < this.size) {
          let result = {
            value: this.set[counter].value,
            done: false,
          };
          counter++;
          return result;
        }
        return {
          done: true,
        };
      },
    };
  }
}
