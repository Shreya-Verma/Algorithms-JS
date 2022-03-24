function alertNames(keyName, keyTime) {
  const nameSet = new Set();
  const empTimeMap = {};

  keyName.forEach((name, i) => {
    let timeArr = empTimeMap[name];
    if (!timeArr) {
      timeArr = [];
      empTimeMap[name] = timeArr;
    }

    const [h, m] = keyTime[i].split(":");

    // convert hours to minutes to avoid any floating point bs
    timeArr.push(h * 60 + +m);
  });

  for (let name of Object.keys(empTimeMap)) {
    let tempTime = empTimeMap[name];
    // Sort Time
    if (tempTime.length > 1) tempTime.sort((a, b) => a - b);

    for (let i = 0; i < tempTime.length - 2; i++) {
      let diff = tempTime[i + 2] - tempTime[i];
      if (diff <= 60) {
        nameSet.add(name);
      }
    }
  }

  const emp = Array.from(nameSet);
  // sort by name
  return emp.sort();
}

console.log(
  alertNames(
    ["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"],
    ["10:40", "10:00", "11:00", "09:00", "11:00", "13:00", "15:00"]
  )
);
