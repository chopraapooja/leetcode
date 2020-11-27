function isAnagram(s: string, p: string): boolean {
  if (s.length == p.length) {
    return [...s].sort().toString() === [...p].sort().toString();
  }
  return false;
}

function findAnagrams(s: string, p: string): number[] {
  const result = [];
  let i = 0;
  while (i < s.length) {
    const anagram = isAnagram(s.substr(i, p.length), p);
    if (anagram) {
      result.push(i);
    }
    i++;
  }
  return result;
};