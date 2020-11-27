function sortedSquares(A: number[]): number[] {
  let partition = 0;
  let i = 0;
  while (A[i] < 0) {
    partition++;
    i++;
  }
  let negs = A.splice(0, partition);
  let result = new Array(negs.length + A.length);
  let ptr1 = negs.length > 0 ? 0 : -1;
  let ptr2 = A.length > 0 ? 0 : -1;
  // now I have 2 sorted arrays, need to merge these arrays
  for (let i = 0; i < result.length; i++) {
    let elem;
    if (ptr1 === -1) {
      elem = A[ptr2] * A[ptr2];
      ptr2 = A.length > (ptr2 + 1) ? ptr2 + 1 : -1;
    } else if (ptr2 === -1) {
      elem = negs[ptr1] * negs[ptr1];
      ptr1 = negs.length > (ptr1 + 1) ? ptr1 + 1 : -1;
    } else {
      const a = negs[ptr1] * negs[ptr1];
      const b = A[ptr2] * A[ptr2];
      if (a <= b) {
        ptr1 = negs.length > (ptr1 + 1) ? ptr1 + 1 : -1;
        elem = a
      } else {
        ptr2 = A.length > (ptr2 + 1) ? ptr2 + 1 : -1;
        elem = b;
      }
    }

    result[i] = elem;
  }
  return result;
};
