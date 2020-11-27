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

function sort(arr) {
  let root = null;
  function insertNodeInBST(tree, num) {
    const newNode = { left: null, right: null, data: num, parent: null }
    if (!tree) return newNode;
    if (tree.data > num) {
      tree.left = insertNodeInBST(tree.left, num);
    } else {
      tree.right = insertNodeInBST(tree.right, num);
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
  return sortedArr;
}

// Complete the luckBalance function below.
function luckBalance(k, contests) {
  let luck = 0;
  let importantContests = [];
  for (let i = 0; i < contests.length; i++) {
    const l = parseInt(contests[i][0]);
    const imp = parseInt(contests[i][1]);
    if (imp === 1) {
      importantContests = [...importantContests, l]
    }
    luck += l;
  }

  const x = importantContests.length;
  const y = x - k;
  if (y < 0) return luck;
  const sortedImpContests = sort(importantContests);
  for (let i = 0; i < y; i++) {
    luck -= sortedImpContests[i]
    luck -= sortedImpContests[i]
  }
  return luck
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(' ');

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  let contests = Array(n);

  for (let i = 0; i < n; i++) {
    contests[i] = readLine().split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
  }

  const result = luckBalance(k, contests);

  ws.write(result + '\n');

  ws.end();
}
