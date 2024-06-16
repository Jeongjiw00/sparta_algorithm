// 정수 삼각형
function solution(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const firstCase = triangle[i - 1][j - 1] ?? 0;
      const secondCase = triangle[i - 1][j] ?? 0;

      if (secondCase >= firstCase) {
        triangle[i][j] += secondCase;
        continue;
      }
      triangle[i][j] += firstCase;
    }
  }
  return Math.max(...triangle.at(-1));
}

// 효율성 두 개 실패
function solution2(triangle) {
  const arr = triangle.slice();

  // (원본 배열 길이 - 2) 라인부터 0까지 진행
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
    }
  }

  return arr[0][0];
}
