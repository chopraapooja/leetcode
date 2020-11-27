'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the isValid function below.
function FlopisValid(s) {
  if (s.trim() === '') return true;
  // will strore <number, char[]>. For e.g. aaabbcc will result in {3: ['a'], 2: ['b', 'c']}
  let occuranceMap = new Map();
  let countOccuranceOfX = 0;
  for (let i = 0; i < s.length; i++) {
    countOccuranceOfX++;
    const nextChar = s.length == i + 1 ? null : s[i + 1];
    if (s[i] !== nextChar) {
      // fill occuranceMap
      const vals = occuranceMap.get(countOccuranceOfX) || [];
      occuranceMap.set(countOccuranceOfX, vals.length > 0 ? [s[i], ...vals] : [s[i]])

      const size = occuranceMap.size;
      // if (size === 1) return true;
      if (size > 2) return false; // only 2 occurance factor is acceptable
      const [key1, key2] = occuranceMap.keys();
      const bigKey = key1 > key2 ? key1 : key2;
      if (Math.abs(key1 - key2) !== 1 || occuranceMap.get(bigKey).length !== 1) return false;

      //reset countOccurenceOfX;
      countOccuranceOfX = 0;
    }
  }
  return true;
}

function isValid(s) {
  let charCountMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const count = charCountMap.get(s[i]) + 1 || 1;
    charCountMap.set(s[i], count);
  }
  let countCharsMap = new Map();
  for (const [char, count] of charCountMap) {
    const chars = countCharsMap.get(count) ? [char, ...countCharsMap.get(count)] : [char]
    countCharsMap.set(count, chars)
  }

  if (countCharsMap.size <= 1) return true;
  if (countCharsMap.size > 2) return false;
  const [key1, key2] = countCharsMap.keys();
  const length1 = countCharsMap.get(key1).length;
  const length2 = countCharsMap.get(key2).length;
  const delta = 1;
  if (key1 * length1 - delta === key2 || key1 * length1 - delta === 0) return true;
  if (key2 * length2 - delta === key1 || key2 * length2 - delta === 0) return true;
  return false;
}


function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = isValid(s) ? 'YES' : 'NO';

  ws.write(result + "\n");

  ws.end();
}
