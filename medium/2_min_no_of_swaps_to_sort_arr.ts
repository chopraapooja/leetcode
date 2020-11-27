'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function findSmallElemIndex(arr, start, end) {
  let small = start;
  for (let i = start + 1; i < end; i++) {
    if (arr[i] < arr[small]) {
      small = i
    }
  }
  return small;
}


// Complete the minimumSwaps function below.
function minimumSwaps1(arr) {
  let swapCount = 0;
  for (let indexToSort = 0; indexToSort < arr.length; indexToSort++) {
    const smallElemIndex = findSmallElemIndex(arr, indexToSort, arr.length);
    if (arr[indexToSort] != arr[smallElemIndex]) {
      //swap indexToSort, smallElemIndex
      const temp = arr[indexToSort];
      arr[indexToSort] = arr[smallElemIndex];
      arr[smallElemIndex] = temp;
      swapCount++;
    }
  }
  return swapCount;
}

function minimumSwaps(arr) {
  let swapCount = 0;
  let visited = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const placedCorrect = arr[i] === i + 1;
    if (placedCorrect) {
      visited[i] = true
      continue;
    }
    //Not placedCorrect
    let x = arr[i];
    while (!visited[x - 1]) {
      if (x === i + 1) {
        visited[i] = true
        break;
      }
      console.log(x, i + 1)
      swapCount++;
      visited[x - 1] = true;
      x = arr[x - 1];
    }
  }
  return swapCount;
}


function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const res = minimumSwaps(arr);

  ws.write(res + '\n');

  ws.end();
}
