/**
 * Basic debounce
 */

function hola() {
  console.log("Say Hello");
}

function vanillaDebounce(func, time = 500) {
  let debounceTimer;
  return (...args) => {
    // clearing timeout ensures that the callback function isn’t called until the time has been exhausted
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), time);
  };
}

const handleDebounce = vanillaDebounce(hola, 500);

/**
 * Search box optimisation with debounce
 */
let inputVal = document.getElementById("inp");
let output = document.getElementById("output");
let debounceOutput = document.getElementById("debounceOutput");

const updateOutput = () => {
  output.innerHTML = inputVal.value;
};

const updateDebounceOutput = () => {
  debounceOutput.innerHTML = inputVal.value;
};

///////////DEBOUNCE
let debounceTimer;
const debounce = (callback, time = 700) => {
  // clearing timeout ensures that the callback function isn’t called until the time has been exhausted
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, time);
};

//////////////////////////////////////////////////
inputVal.addEventListener(
  "input",
  () => {
    updateOutput();
    debounce(updateDebounceOutput);
  },
  false
);
