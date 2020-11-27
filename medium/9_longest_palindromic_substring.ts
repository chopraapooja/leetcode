function isPalindrom(s: string, start: number, end: number) {
  const result = true;
  while (start < end) {
    if (s[start] != s[end]) return false;
    start++;
    end--;
  }
  return result
}

function longestPalindrome(s: string): string {
  let longestPalindrome = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= 0; j--) {
      const is = isPalindrom(s, i, j);
      if (is) {
        const sub = s.substr(i, (j - i) + 1);
        console.log(sub, i, j);
        if (sub.length > longestPalindrome.length) {
          longestPalindrome = sub;
        }
      }
    }
  }
  return longestPalindrome;
};