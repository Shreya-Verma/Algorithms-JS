function canAttendMeeting(intervals) {
  if (!intervals) return false;
  if (intervals.length === 1) return true;
  // sort meeting according to start time
  let sorted = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < sorted.length - 1; i++) {
    // if meeting end time is greater than next meetings start time then return false
    if (sorted[i][1] > sorted[i + 1][0]) return false;
  }
  return true;
}

console.log(
  canAttendMeeting([
    [3, 7],
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
