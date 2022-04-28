/**
 *
 * Analyze User Website Visit Pattern
 *
 */
function mostVisitedPattern(username, timestamp, website) {
  let n = username.length;

  const userVisitMap = new Map();
  // {'username': ['website', timestamp]}
  for (let i = 0; i < n; i++) {
    if (!userVisitMap.has(username[i])) {
      userVisitMap.set(username[i], []);
    }
    userVisitMap.get(username[i]).push([website[i], timestamp[i]]);
  }

  const frequencyMap = new Map();

  for (const [username, visits] of userVisitMap) {
    const sequence = createThreeWebsiteSequence(visits, 3);
    for (let s of sequence) {
      if (!frequencyMap.has(s)) {
        frequencyMap.set(s, 0);
      }
      frequencyMap.set(s, frequencyMap.get(s) + 1);
    }
  }

  let max = 0;
  let finalOrder = "";
  for (let [seq, freq] of frequencyMap) {
    if (freq > max) {
      max = freq;
      finalOrder = seq;
    } else if (max === freq) {
      if (seq < finalOrder) {
        finalOrder = seq;
      }
    }
  }

  return finalOrder.split("_").slice(1);
}

function createThreeWebsiteSequence(visits, Q) {
  const n = visits.length;

  // sort based on timestamp
  visits.sort((a, b) => a[1] - b[1]);

  let accessSet = new Set();
  let seq;

  //since it is sorted on timestamp base, hence
  if (visits.length === Q) {
    seq = "";
    for (let i = 0; i < n; i++) {
      seq += `_${visits[i][0]}`;
    }
    accessSet.add(seq);
  } else {
    for (let i = 0; i < n - Q + 1; i++) {
      let web1 = visits[i][0]; // n-2(last set will have to have 3)
      for (let j = i + 1; j < n - 1; j++) {
        let web2 = visits[j][0];
        for (let k = j + 1; k < n; k++) {
          const web3 = visits[k][0];
          seq = `_${web1}_${web2}_${web3}`;
          accessSet.add(seq);
        }
      }
    }
  }

  return accessSet;
}

let username = ["ua", "ua", "ua", "ub", "ub", "ub"];
let timestamp = [1, 2, 3, 4, 5, 6];
let website = ["a", "b", "c", "a", "b", "a"];

console.log(mostVisitedPattern(username, timestamp, website));
