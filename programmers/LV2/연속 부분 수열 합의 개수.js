// 연속 부분 수열 합의 개수연속 부분 수열 합의 개수연속 부분 수열 합의 개수
function solution(elements) {
  const set = new Set();

  for (let i = 1; i <= elements.length; i++) {
    const new_array = elements.concat(elements.slice(0, i));

    for (let j = 0; j < elements.length; j++) {
      set.add(new_array.slice(j, j + i).reduce((a, c) => a + c, 0));
    }
  }
  return set.size;
}
