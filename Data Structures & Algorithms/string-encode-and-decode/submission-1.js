class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */
  encode(strs) {
    return strs.map(s => `${s.length}#${s}`).join('');
  }

  /**
   * @param {string} str
   * @return {string[]}
   */
  decode(str) {
    const res = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      // move j to the separator '#'
      while (str[j] !== '#') j++;

      const len = Number(str.slice(i, j));
      const word = str.slice(j + 1, j + 1 + len);

      res.push(word);

      // move pointer past this token
      i = j + 1 + len;
    }

    return res;
  }
}
