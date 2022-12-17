function solution(lines) {
  let result = 0;
  const same = {};
  
  for (let i = 0; i < lines.length; i++) { // i = 0,1,2
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      //끝번호를 제외해야함 왜냐 2번 예제처럼 점만 겹쳐도 +1 해주기 때문에 틀리게 나옴
      if (same[j] >= 1) {
        same[j] += 1;
      } else {
        same[j] = 1;
      }
    }
  }
  for (let k in same) {
    if (same[k] >= 2) {
      result++;
    }
  }
  return result;
}

lines = [
  [0, 5],
  [3, 9],
  [1, 10],
];
console.log(solution(lines));
