/**
 * ES6 module pattern
 */
const _iAmPrivate =
  "This is a private variable of this module, and cannot be directly accessed outside this file";
const _init = 10;

export function add(n) {
  return n + _init;
}
export function subtract(n) {
  return n - _init;
}
export function multiply(n) {
  return n * _init;
}

export default function calculator(type) {
  return `I am a ${type} calulator`;
}
