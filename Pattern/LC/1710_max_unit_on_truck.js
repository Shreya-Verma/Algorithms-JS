function maxUnitOnTruck(boxTypes, truckSize) {
  // sort in decreasing order of units pr box;
  let sorted = boxTypes.sort((a, b) => b[1] - a[1]);
  console.log(sorted);
  let total = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (truckSize === 0) return total;
    let count = Math.min(truckSize, sorted[i][0]);
    truckSize -= count;
    total += count * sorted[i][1];
  }
  return total;
}

console.log(
  maxUnitOnTruck(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
