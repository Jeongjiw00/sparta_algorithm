// 두 개 뽑아서 더하기
function solution(numbers) {
  const result = [];
  numbers.forEach((a, index1) => {
    numbers.forEach((b, index2) => {
      if (index1 !== index2 && !result.includes(a + b)) {
        result.push(a + b);
      }
    });
  });

  return result.sort((a, b) => a - b);
}
