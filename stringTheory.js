class Solution {
  solve(s) {
    const arr = Array.from(s);
    const empty = ".";
    let res = [];
    const indexR = arr
      .map((e, i) => {
        if (e == "R") {
          return i;
        }
      })
      .filter((e) => e)
      .toString();

    const right = arr
      .map((e, i) => {
        if (i > indexR) {
          return e;
        }
      })
      .filter((e) => e)
      .every((e) => e == empty);
    res.push(right);

    const left = arr
      .map((e, i) => {
        if (i < indexR) {
          return e;
        }
      })
      .filter((e) => e)
      .every((e) => e == empty);
    res.push(left);
    return res.some((e) => e == true);
  }
}
const ans = new Solution();
console.log(ans.solve("......B....R.............."));
console.log(ans.solve("B...B...R........BBBB"));
