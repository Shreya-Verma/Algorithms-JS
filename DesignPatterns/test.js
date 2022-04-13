import calculator, { add, subtract, multiply } from "./es6-module.js";

console.log("ADD: ", add(8));
console.log("Subtract: ", subtract(20));
console.log("Multiply: ", multiply(8));
console.log(calculator("Scientific"));

let btn = document.getElementById("testDynamicImport");
btn.addEventListener(
  "click",
  () => {
    import("./dynamic-module.js").then((module) => {
      console.log(module.sayHello("Shreya"));
      let span = document.getElementById("output");
      span.textContent =
        "Dynamically imported dynamic-module file; check network log to verify";
    });
  },
  false
);

//OR
// btn.addEventListener(
//   "click",
//   async () => {
//     let module = await import("./dynamic-module.js");
//     console.log(module.sayHello("Shreya"));
//     let span = document.getElementById("output");
//     span.textContent =
//       "Dynamically imported dynamic-module file; check network log to verify";
//   },
//   false
// );
