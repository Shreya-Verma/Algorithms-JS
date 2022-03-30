const info = {
  firstName: "Shreya",
};
function printName() {
  return `I am ${this.firstName}`;
}

function printCity(city, state) {
  return `I am ${this.firstName} and I live in ${city}, ${state}`;
}

function printDetails(city, state, country) {
  return `I am ${this.firstName} and I live in ${city}, ${state}, ${country}`;
}

console.log("ORIGINAL: ", printName.bind(info)());
console.log("ORIGINAL: ", printCity.bind(info, "Bentonville", "AR")());
const callDetails = printDetails.bind(info, "Bentonville", "AR");
console.log("ORIGINAL: ", callDetails("USA"));

// IMPLEMENT CUSTOM BIND IN JS
Function.prototype.myBindName = function (context) {
  // object for which the function has to be called
  const fn = this; // Refers to the function this bind will be called with
  return function () {
    return fn.apply(context);
  };
};

Function.prototype.myBindCity = function (context, ...args) {
  // object for which the function has to be called
  const fn = this; // Refers to the function this bind will be called with
  return function () {
    return fn.apply(context, [...args]);
  };
};

Function.prototype.myBindDetails = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

console.log("CUSTOM: ", printName.myBindName(info)());
console.log("CUSTOM: ", printCity.myBindCity(info, "Bentonville", "AR")());
console.log(
  "CUSTOM: ",
  printDetails.myBindDetails(info, "Bentonville", "AR")("USA")
);
