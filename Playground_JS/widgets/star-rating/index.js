const data = {
  currentRating: 3,
  ratings: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
};

const ratingContainer = document.getElementById("rating");
const starContainer = document.querySelector("#star-container");
const ul = document.querySelector("ul");
let stars = [];

function createRatingComp() {
  stars = data.ratings.map((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = "&starf;";
    a.id = item.id;
    a.addEventListener("click", handleRatingClick);
    li.appendChild(a);
    return li;
  });

  for (const star of stars) {
    ul.appendChild(star);
  }
  if (data.currentRating > 0) {
    fillRating(data.currentRating);
  }
}

function fillRating(num) {
  const listItems = document.querySelectorAll("li");
  for (let i = 0; i < num; i++) {
    let item = listItems[i];
    const a = item.querySelector("a");
    a.classList.add("active");
  }
  ratingContainer.innerText = num;
}

function handleRatingClick(e) {
  const listItems = document.querySelectorAll("li");
  const currentId = +e.target.id;
  for (const item of listItems) {
    const a = item.querySelector("a");
    if (a.id <= currentId) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  }
  ratingContainer.innerText = currentId;
}

function clearRatings() {
  const listItems = document.querySelectorAll("li");
  for (const item of listItems) {
    const a = item.querySelector("a");
    a.classList.remove("active");
  }
  ratingContainer.innerText = 0;
}
