// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

export default class MyMap {
  constructor(it = null) {
    this.map = [];
    this.size = 0;

    if (it && it.length > 0) {
      for (let [key, value] of it) {
        this.map.push({ key, value });
        this.size++;
      }
    }
  }

  set(key, value) {
    if (!this.has(key)) {
      this.map.push({ key, value });
      this.size++;
    }
  }

  get(key) {
    let index = this.getIndex(key);
    if (index !== -1) {
      return this.map[index].value;
    } else {
      return undefined;
    }
  }

  has(key) {
    for (let ele of this.map) {
      if (ele.key === key) {
        return true;
      }
    }
    return false;
  }

  delete(key) {
    let index = this.getIndex(key);
    if (index !== -1) {
      this.map.splice(index, 1);
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.map = [];
    this.size = 0;
  }

  getIndex(key) {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i].key === key) {
        return i;
      }
    }
    return -1;
  }

  entries() {
    let counter = 0;
    return {
      next: () => {
        while (counter < this.size) {
          let result = {
            value: [this.map[counter].key, this.map[counter].value],
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

  [Symbol.iterator]() {
    let counter = 0;
    return {
      next: () => {
        while (counter < this.size) {
          let result = {
            value: [this.map[counter].key, this.map[counter].value],
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
