function mergerIntervals(intervals) {
  if (!intervals) return [];
  //intervals = [[1,3],[2,6],[8,10],[15,18]]
  // sort according to start time
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const prev = intervals[i - 1];

    if (current[0] <= prev[1]) {
      intervals[i] = [prev[0], Math.max(prev[1], current[1])];
      intervals.splice(i - 1, 1);
      i -= 1; // After merge, the arr become shorter
    }
  }
  return intervals;
}

console.log(
  mergerIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
