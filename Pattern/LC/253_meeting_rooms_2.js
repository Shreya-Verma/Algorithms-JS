function minMeetingRooms(intervals) {
  if (!intervals || !intervals.length) {
    return 0;
  }
  if (intervals.length == 1) return 1;
  //sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  let rooms = 0;
}

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
