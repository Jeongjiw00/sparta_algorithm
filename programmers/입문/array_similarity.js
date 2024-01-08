function solution(s1, s2) {
  let cnt = 0;

  for (let i in s1) {
    for (let j in s2) {
      if (s1[i] === s2[j]) {
        cnt++;
      }
    }
  }
  return cnt;
}

// function solution(s1, s2) {
//     const intersection = s1.filter((x) => s2.includes(x));
//     return intersection.length;
// }
