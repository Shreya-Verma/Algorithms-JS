/**
 *
 * Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.
 *
 */

function TNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let root = new TNode(12);
root.left = new TNode(7);
root.right = new TNode(1);
root.left.left = new TNode(9);
root.left.right = new TNode(2);
root.right.left = new TNode(10);
root.right.right = new TNode(5);
root.right.right.left = new TNode(20);
root.right.right.right = new TNode(25);

/**
 *
 * Top To Bottom
 * @param {*} root
 * @returns [[]]
 */
function traverseTopToBottom(root) {
  let result = [];
  if (root === null) return result;
  // Initate queue
  let queue = [];
  // push root in queue
  queue.push(root);

  while (queue.length > 0) {
    let levelSize = queue.length;
    // find elements on this level
    let levelEls = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      levelEls.push(node.val);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(levelEls);
  }
  return result;
}

console.log("Level order Top To Bottom traversal: ");
console.log(traverseTopToBottom(root));

/**
 *
 * Bottom To Top
 * @param {*} root
 * @returns [[]]
 */
function traverseBottomToTop(root) {
  let result = [];
  if (root == null) return result;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let level = queue.length;
    let levelEl = [];

    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      levelEl.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.unshift(levelEl);
  }
  return result;
}

console.log("Level order  Bottom To Top traversal: ");
console.log(traverseBottomToTop(root));

/**
 *
 * Zig Zag Traversal
 *
 * @param {*} root
 * @returns [[]]
 */
function zigZagTraversal(root) {
  let result = [];
  if (root === null) return result;

  let queue = [];
  queue.push(root);
  let leftToRight = true;
  while (queue.length > 0) {
    let level = queue.length;
    let levelEl = [];
    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      if (leftToRight) {
        levelEl.push(node.val);
      } else {
        levelEl.unshift(node.val);
      }

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    result.push(levelEl);
    // reverse the direction of level array
    leftToRight = !leftToRight;
  }
  return result;
}

console.log("Level order  Zig Zag traversal: ");
console.log(zigZagTraversal(root));

/**
 *
 * Level Average
 * @param {*} root
 * @returns []
 */
function levelAverage(root) {
  let result = [];
  if (root === null) return result;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let level = queue.length;
    let levelTotal = 0.0;

    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      levelTotal += node.val;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    result.push(levelTotal / level);
  }
  return result;
}

console.log("Level Average: ");
console.log(levelAverage(root));

/**
 *
 * @param {*} root
 * @returns
 */
function findMinimumDepth(root) {
  let minDepth = 0;
  if (root === null) return minDepth;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    minDepth += 1;
    let level = queue.length;

    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      if (node.left === null && node.right === null) {
        return minDepth;
      }
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
}

console.log("Minimum Depth: ");
console.log(findMinimumDepth(root));

/**
 *
 * @param {*} root
 * @returns
 */
function findMaximumDepth(root) {
  let maxDepth = 0;
  if (root === null) return maxDepth;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    maxDepth += 1;
    let level = queue.length;

    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  return maxDepth;
}

console.log("Maximum Depth: ");
console.log(findMaximumDepth(root));

/**
 *
 * @param {*} root
 * @returns
 */
function findSucessor(root, key) {
  if (root === null) return null;
  if (root.val === key) return root.left;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let node = queue.shift();
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
    if (node.val === key) {
      break;
    }
  }
  // Net element will be at 0th index
  if (queue.length > 0) {
    return queue[0];
  }
  return null;
}

console.log("Level Order Sucessor: ");
let suc = findSucessor(root, 1);
suc ? console.log(suc.val) : console.log(null);
