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

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
  //create binary tree
  let root = null;
  let minAbsDiff = Number.MAX_SAFE_INTEGER;

  function insertNodeInBST(tree, num) {
    const newNode = { left: null, right: null, data: num, parent: null, diffL: null, diffR: null }
    if (!tree) return newNode;
    if (tree.data > num) {
      tree.left = insertNodeInBST(tree.left, num);
      tree.diffL = Math.abs(tree.data - tree.left.data);
      if (tree.diffL < minAbsDiff) minAbsDiff = tree.diffL;
    } else {
      tree.right = insertNodeInBST(tree.right, num);
      tree.diffR = Math.abs(tree.data - tree.right.data);
      if (tree.diffR < minAbsDiff) minAbsDiff = tree.diffR;
    }
    return tree
  }

  function traverse(node) {
    if (!node) return [];
    return [...traverse(node.left), node.data, ...traverse(node.right)];
  }

  for (let i = 0; i < arr.length; i++) {
    root = insertNodeInBST(root, arr[i]);
  }

  const sortedArr = traverse(root);
  for (let i = 1; i < sortedArr.length; i++) {
    const absDiff = Math.abs(sortedArr[i - 1] - sortedArr[i])
    if (absDiff < minAbsDiff) {
      minAbsDiff = absDiff
    }
  }
  return minAbsDiff;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result = minimumAbsoluteDifference(arr);

  ws.write(result + '\n');

  ws.end();
}
