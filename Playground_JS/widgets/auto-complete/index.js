/**
 * You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed
Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]

OR

 Given a list of 50 states, Case-insenitive.
 How can we increase the participants' typing speed and help them decrease the number of keystrokes to fill in the state?
 */

import AutoComplete from "./AutoComplete.js";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const input = document.querySelector("input");
const ul = document.querySelector("ul");
const autoComplete = new AutoComplete(states);

const onKeyUp = (e) => {
  let keyVal = e.target.value;
  let preditions = [];

  if (keyVal) {
    // add predictions to ul
    preditions = autoComplete.getSuggestions(keyVal);

    if (preditions.length > 0) {
      ul.classList.remove("disp");
      for (let state of preditions) {
        ul.innerHTML = `<li>${state}</li>`;
      }
    } else {
      ul.innerHTML = "";
      ul.classList.add("disp");
    }
  } else {
    ul.innerHTML = "";
    ul.classList.add("disp");
  }
};

const debounce = (func, time = 500) => {
  let debounceTimer;
  return (args) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(args), time);
  };
};

//ADD EVENT LISTENER
input.addEventListener("keyup", debounce(onKeyUp, 500), false);
