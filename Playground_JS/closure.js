function counter(initialize) {
  let counter = initialize;
  function increment() {
    return counter++;
  }
  return increment;
}

let next = counter(10);
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());

let newNext = counter(30);
console.log(newNext());

// how  can we oncify / limit the closure.
function counter2(init, lim) {
  let counter = init;
  function increment() {
    if (counter <= lim) return counter++;
    else return;
  }
  return increment;
}

let next1 = counter2(10, 15);
console.log(next1());
console.log(next1());
console.log(next1());
console.log(next1());
console.log(next1());
console.log(next1());
console.log(next1()); // undefined
console.log(next1()); // undefined
