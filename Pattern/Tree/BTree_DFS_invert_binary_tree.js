function TreeNode(value = 0) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
/**
 *
 *          1
 *     2         3
 *  4     5    6   7
 *
 *
 */

function invertTree(node) {
  if (!node) return node;
  let right = invertTree(node.right);
  let left = invertTree(node.left);
  node.left = right;
  node.right = left;
  return node;
}

function traverse(root) {
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

      levelEls.push(node.value);

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

invertTree(root);

console.log(traverse(root));
