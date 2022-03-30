/**
 * Create a new Object
 */

const company = {
  ID: 101,
  name: "Xebia",
};

const employee = {
  name: "Pooja",
  company: "Xebia",
  age: 25,
};
Object.freeze(company);

/**
 * Deep Copy, dosent't change the original object
 * can be done using Object.assign({}, source)
 * or naive way 
 * const newObj = {
*   name: employee.name,
    company: employee.company,
    age: employee.age,
 * }
 * 
 * 
 */
const employeeDeepCopy = Object.assign({}, employee);
employeeDeepCopy.city = "Denver";
console.log(employee, employeeDeepCopy);

//Shallow Copy , changes the original object
const employeeShallowCopy = employee;
employeeShallowCopy.salary = 1000000;
console.log(employee, employeeShallowCopy);

/**
 * THIS keyword
 */

function sayHello(city, state) {
  console.log(`${this.name} says hello!! I live in ${city}, ${state}`);
}
const shreya = {
  name: "Shreya",
  age: 31,
};
const ajit = {
  name: "Ajit",
  age: 33,
};

/**
 * calling hello() when using sayHello.apply(ajit)/sayHello.call(ajit) will not work here as, apply does not return a function,
 * it calls the same function wrapping it in "this"
 */
let hello = sayHello.bind(ajit, "Bentonville", "AR");
hello();

/**
 * Arrow functions
 */

const John = {
  name: "John",
  lname: "Doe",
  age: 30,
  profession: "Software Engineer",
  greetings: function () {
    console.log(`Greetings from ${this.name} ${this.lname}`);
  },
  sayAge: function () {
    setTimeout(function () {
      console.log(`I am  ${this.age} years old`);
    }, 1000);
  },
  sayProfession: function () {
    setTimeout(() => {
      console.log(`I am  a ${this.profession}`);
    }, 1000);
  },
};

John.greetings();
John.sayAge();
John.sayProfession();
