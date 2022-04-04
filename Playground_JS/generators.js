function* createNumber() {
  const d = yield 4;
  yield d;
}

const generator = createNumber();

console.log(generator.next());
console.log(generator.next(23));
console.log(generator.next());
