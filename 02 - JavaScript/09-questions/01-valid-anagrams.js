//https://leetcode.com/problems/valid-anagram/

function validAnagrams(s, t, m = {}) {
  for (let c of s) m[c] = (m[c] || 0) + 1;
  for (let c of t) if (!m[c]--) return false;
  return Object.values(m).every(v => !v);
}
