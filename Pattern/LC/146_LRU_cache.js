class DNode {
  constructor(key = 0, data = 0) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //INSERT AT HEAD
  insertAtHead(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
    return node;
  }

  //INSERT AT TAIL
  insertAtTail(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
    return node;
  }

  //REMOVE FROM HEAD
  removeFromHead() {
    return this.remove(this.head);
  }

  //REMOVE FROM TAIL
  removeFromTail() {
    return this.remove(this.tail);
  }

  remove(node) {
    if (!node) {
      return;
    }

    if (node.prev != null) {
      node.prev.next = node.next;
    }

    if (node.next != null) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    this.size--;
    return node;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashMap = new Map();
    this.cacheValuesList = new DLL();
  }

  Set(key, data) {
    //if hash does not have the key means it is a new entry
    if (!this.hashMap.get(key)) {
      //check if size will exceeded capacity

      this.removeLRUFromHeadIfNeeded();

      let newNode = new DNode(key, data);
      this.cacheValuesList.insertAtTail(newNode);
      this.hashMap.set(key, newNode);
    } else {
      this.cacheValuesList.remove(this.hashMap.get(key));
      let newNode = new DNode(key, data);
      this.cacheValuesList.insertAtTail(newNode);
      this.hashMap.set(key, newNode);
    }
  }

  Get(key) {
    if (!this.hashMap.get(key)) {
      return null;
    } else {
      let value = this.hashMap.get(key).data;
      this.cacheValuesList.remove(this.hashMap.get(key));
      let node = new DNode(key, value);
      this.cacheValuesList.insertAtTail(node);
      return node;
    }
  }

  removeLRUFromHeadIfNeeded() {
    if (this.cacheValuesList.size >= this.capacity) {
      let node = this.cacheValuesList.removeFromHead();
      this.hashMap.delete(node.key);
    }
  }
  printcache() {
    let str = "";

    let current = this.cacheValuesList.head;
    while (current != null) {
      str += "(" + current.key + "," + current.data + ")" + "<==>";
      current = current.next;
    }

    console.log(str + "null");
  }
}

let obj = new LRUCache(3);
obj.Set(1, "Movie1");
obj.Set(2, "Movie2");
obj.Set(3, "Movie3");
obj.printcache();
obj.Set(4, "Movie4");
obj.printcache();

obj.Get(3);
obj.printcache();
