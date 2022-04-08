/**
 * Basic throttle
 */

function amigo() {
  console.log("Hola Amigo");
}

function vanillaThrottle(func, time = 500) {
  let throttlePause;
  return (...args) => {
    if (throttlePause) return;
    throttlePause = true;
    setTimeout(() => {
      func.apply(this, args);
      throttlePause = false;
    }, time);
  };
}

const handleThrottle = vanillaThrottle(() => amigo());

/**
 * Handle mouse events with throttle
 */

let mouseDiv = document.getElementById("mouse-event");
let mouseOverCount = document.getElementById("mouseover-count");
let mouseThrottle = document.getElementById("mouseover-throttle");

let count = 0;
let throttleCount = 0;

const updateMouseoverCount = () => {
  count++;
  mouseOverCount.innerHTML = count;
};

const updateMouseoverThrottle = () => {
  throttleCount++;
  mouseThrottle.innerHTML = throttleCount;
};

////////THROTTLE
//initialize throttlePause variable outside throttle function
let throttlePause;
const throttle = (callback, time = 550) => {
  //don't run the function if throttlePause is true
  if (throttlePause) return;
  //set throttlePause to true after the if condition. This allows the function to be run once
  throttlePause = true;
  //setTimeout runs the callback within the specified time
  setTimeout(() => {
    callback();
    //throttlePause is set to false once the function has been called, allowing the throttle function to loop
    throttlePause = false;
  }, time);
};

mouseDiv.addEventListener(
  "mouseover",
  () => {
    updateMouseoverCount();
    throttle(updateMouseoverThrottle);
  },
  false
);
