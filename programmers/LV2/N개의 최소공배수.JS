// N개의 최소공배수
function solution(arr) {
  const getGCD = (a, b) => {
    if (a % b === 0) return b;
    return getGCD(b, a % b);
  };

  const getLCM = (a, b) => (a * b) / getGCD(a, b);

  return arr.reduce((a, c) => getLCM(a, c), 1);
}

// 유클리드 호제법
function solution(arr) {
  return arr.reduce((acc, cur) => {
    const recursive = (min, max) => {
      return min % max === 0 ? max : recursive(max, min % max);
    };
    let max = 0;
    return (acc * cur) / recursive(acc, cur);
  });
}
