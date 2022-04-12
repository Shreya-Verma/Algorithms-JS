import BinarySearchTree from "./BinarySearchTree.js";

let BST = new BinarySearchTree(6);
BST.insert(4);
BST.insert(9);
BST.insert(5);
BST.insert(2);
BST.insert(8);
BST.insert(12);
BST.insert(10);
BST.insert(14);

let pre = [],
  io = [],
  post = [];
let preOrder = BST.preOrderTraversal();
for (let node of preOrder) {
  pre.push(node.value);
}
console.log("PRE ORDER TRAVERSAL", pre);

let inOrder = BST.inOrderTraversal();
for (let node of inOrder) {
  io.push(node.value);
}
console.log("IN ORDER TRAVERSAL", io);

let postOrder = BST.postOrderTraversal();
for (let node of postOrder) {
  post.push(node.value);
}
console.log("POST ORDER TRAVERSAL", post);

let searchedNode = BST.search(9);
console.log(searchedNode);

//console.log(BST.delete(9));
console.log(BST);

/////////////////////////FIND MIN IN BST////////////////////\
/**
 *
 * Time complexity : O(h), h = height of tree
 * Time complexity : O(n), n = number of nodes in a left skewed tree
 *
 */
function findMin(rootNode) {
  if (rootNode == null) {
    return null;
  }
  while (rootNode.left) {
    rootNode = rootNode.left;
  }
  return rootNode.value;
}

console.log(findMin(BST.root));

/////////////////////////FIND Kth MAX IN BST////////////////////\
/**
 *
 * Time complexity : O(h), h = height of tree
 * Time complexity : O(n), n = number of nodes in a left skewed tree
 *
 */
function findKMax(bst, K) {
  if (bst.root == null) {
    return null;
  }
  let tree = [];
  let inOrder = bst.inOrderTraversal();
  for (let node of inOrder) {
    tree.push(node.value);
  }
  console.log(tree);
  if (tree.length - K >= 0 && K > 0) {
    return tree[tree.length - K];
  }
}

console.log(findKMax(BST, 3));
