/**
 *
 * @param {*} n
 * @param {*} k
 * @returns
 *
 * O(n)
 * Space: O(n);
 */
function findKthFactor(n, k) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  if (factors.length < k) return -1;
  if (factors.length >= k) {
    return factors[k - 1];
  }
  return -1;
}

console.log(findKthFactor(7, 2));

/**
 *
 * @param {*} n
 * @param {*} k
 * @returns
 * O(n)
 * Space: O(1);
 */
function findKthFactorEfficient(n, k) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      k--;
    }
    if (k === 0) return i;
  }
  return -1;
}

console.log(findKthFactorEfficient(7, 2));
