function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.next = null;
}

let rootNode = new Node(12);
rootNode.left = new Node(7);
rootNode.right = new Node(1);
rootNode.left.left = new Node(9);
rootNode.right.left = new Node(10);
rootNode.right.right = new Node(5);

/**
 *
 * Connect Siblings
 */
function connectSiblings(root) {
  if (root === null) return;
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let previousNode = null;
    let level = queue.length;
    //connect all nodes at the level
    for (let i = 0; i < level; i++) {
      let currentNode = queue.shift();

      if (previousNode !== null) {
        previousNode.next = currentNode;
      }
      previousNode = currentNode;
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}

console.log(connectSiblings(rootNode));
