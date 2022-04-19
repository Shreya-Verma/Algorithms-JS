import BNode from "./BNode.js";

export default class BinarySearchTree {
  constructor(rootVal) {
    this.root = rootVal ? new BNode(rootVal) : null;
  }

  //INSERT INTO BINARY TREE
  insert(newVal) {
    if (this.root === null) {
      this.root = new BNode(newVal);
      return this;
    }
    let current = this.root;
    let parent;
    while (current) {
      parent = current; //update parent
      if (newVal < current.value) {
        //if newValue < currentNode.val,
        //iterate to the left subtree
        current = current.left;
      } else {
        //if newValue >= currentNode.val,
        //iterate to the right subtree
        current = current.right;
      }
    }
    if (newVal < parent.value) {
      parent.left = new BNode(newVal);
    } else {
      parent.right = new BNode(newVal);
    }
  }

  //PRE-ORDER TRAVERSAL   "ROOT -- LEFT -- RIGHT"
  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.left) yield* this.preOrderTraversal(node.left);
    if (node.right) yield* this.preOrderTraversal(node.right);
  }

  //IN-ORDER TRAVERSAL    "LEFT -- ROOT -- RIGHT"
  *inOrderTraversal(node = this.root) {
    if (node.left) yield* this.inOrderTraversal(node.left);
    yield node;
    if (node.right) yield* this.inOrderTraversal(node.right);
  }

  //POST-ORDER TRAVERSAL  "LEFT -- RIGHT -- ROOT"
  *postOrderTraversal(node = this.root) {
    if (node.left) yield* this.postOrderTraversal(node.left);
    if (node.right) yield* this.postOrderTraversal(node.right);
    yield node;
  }

  //SEARCH IN TREE ITERATIVE
  search(value) {
    let current = this.root;
    while (current && current.value !== value) {
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }

  //DELETE NODE
  delete(value, nodeToDelete = this.root) {
    //Case 1: DELETING FROM EMPTY TREE
    if (nodeToDelete === null) return false;

    //Traversing through nodes
    let parentNode;
    while (nodeToDelete && nodeToDelete.value !== value) {
      parentNode = nodeToDelete;
      if (value < nodeToDelete.value) {
        nodeToDelete = nodeToDelete.left;
      } else {
        nodeToDelete = nodeToDelete.right;
      }
    }

    if (nodeToDelete === null) {
      //CASE 2: NODE TO DELETE NOT FOUND
      return false;
    } else if (nodeToDelete.isLeaf) {
      //Case 3: DELETING LEAF NODE
      if (nodeToDelete.value === this.root.value) {
        this.root = null;
        return true;
      } else if (nodeToDelete.value < parentNode.value) {
        parentNode.left = null;
        return true;
      } else {
        parentNode.right = null;
        return true;
      }
    } else if (nodeToDelete.hasChildren) {
      //Case 3: DELETING NODE WITH BOTH CHILDREN
      let minRight = nodeToDelete.right;
      while (minRight.left !== null) {
        minRight = minRight.left;
      }
      let temp = minRight.value;
      this.delete(minRight.value, this.root);
      nodeToDelete.value = temp;
      return true;
    } else {
      //Case 4: DELETING NODE WITH ONE CHILD
      if (nodeToDelete.right === null) {
        if (nodeToDelete.value === this.root.value) {
          this.root = nodeToDelete.left;
          return true;
        } else if (nodeToDelete.left.value < parentNode.value) {
          parentNode.left = nodeToDelete.left;
          return true;
        } else {
          parentNode.right = nodeToDelete.left;
          return true;
        }
      } else {
        if (nodeToDelete.value === this.root.value) {
          this.root = nodeToDelete.right;
          return true;
        } else if (nodeToDelete.right.value < parentNode.value) {
          parentNode.left = nodeToDelete.right;
          return true;
        } else {
          parentNode.right = nodeToDelete.right;
          return true;
        }
      }
    }
  }
}
