/**
 * 
 * 
 * You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.
 * 
 */

function reorderLogs(logs) {
  const isNum = (val) => /\d/.test(val);
  const logValue = (log) => log.slice(log.indexOf(" ") + 1);
  const compare = (a, b) => {
    const n = logValue(a).localeCompare(logValue(b));
    if (n !== 0) return n;
    // else compare the key
    return a.localeCompare(b);
  };

  const digits = [];
  const letters = [];
  for (const log of logs) {
    if (isNum(logValue(log))) digits.push(log);
    else letters.push(log);
  }
  letters.sort(compare);
  return [...letters, ...digits];
}

console.log(
  reorderLogs([
    "a1 9 2 3 1",
    "g1 act car",
    "zo4 4 7",
    "ab1 off key dog",
    "a8 act zoo",
  ])
);
