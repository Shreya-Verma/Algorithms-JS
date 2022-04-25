/**
 *
 * @param {*} x
 * @param {*} y
 * @returns
 * Create a multiplication function without using the multiplication operator
 * SOl:
 *       3,2,1
 * 2*3 = 2+2+2 +0
 *          5,4,3,2,1
 * 5*-5 = -(5+5+5+5+5)
 *
 */

function mul(x, y) {
  if (x == 0 || y == 0) return 0;
  if (x == 1) return y;
  if (y == 1) return x;
  return x + mul(x, y - 1);
}

function multiply_without_operator(x, y) {
  let res = mul(x, Math.abs(y));
  return y < 0 ? -res : res;
}

console.log(multiply_without_operator(4, -5));
