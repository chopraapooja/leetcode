'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  let wordsHash = {};
  for (let i = 0; i < magazine.length; i++) {
    wordsHash[magazine[i]] = wordsHash[magazine[i]] === undefined ? 0 : (wordsHash[magazine[i]] + 1)
  }

  for (let i = 0; i < note.length; i++) {
    if(wordsHash[note[i]] > 0) {
      wordsHash[note[i]] = wordsHash[note[i]] - 1
    } else {
      return false;
    }
    
  }
  
  return true;
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
