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


// Complete the isBalanced function below.
function FlopisBalanced(s) {
  function isBracketSet(a, b) {
    if (a === '{' && b === '}') return true;
    if (a === '[' && b === ']') return true;
    if (a === '(' && b === ')') return true;
    return false
  }

  function _isBalanced(s, start, end) {
    if (start > end) return true;
    const length = (end - start) + 1;
    if (length % 2 != 0) return false;
    return isBracketSet(s[start], s[end]) && _isBalanced(s, start + 1, end - 1)
  }


  if (s.length === 0) return true;
  return _isBalanced(s, 0, s.length - 1)
}

function isOpening(char) {
  return '({['.includes(char)
}

function isBracketSet(a, b) {
  if (a === '{' && b === '}') return true;
  if (a === '[' && b === ']') return true;
  if (a === '(' && b === ')') return true;
  return false
}

function isBalanced(s) {
  let ptr = null;
  for (let i = 0; i < s.length; i++) {
    if (isOpening(s[i])) {
      // insertChild(tree, ptr, s[i])
      const newNode = { parent: ptr, data: s[i], children: [] }
      ptr = newNode
    } else if (ptr && isBracketSet(ptr.data, s[i])) {
      ptr = ptr.parent;
    } else {
      return false;
    }
  }
  return ptr == null ? true : false;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const s = readLine();

    let result = isBalanced(s);

    ws.write((result ? 'YES' : 'NO') + "\n");
  }

  ws.end();
}
