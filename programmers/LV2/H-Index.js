// H-Index
function solution(citations) {
  let answer = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) answer++;
    else break;
  }

  return answer;
}

function solution2(citations) {
  citations = citations.sort(sorting);

  let i = 0;

  while (i + 1 <= citations[i]) {
    i++;
  }

  return i;

  function sorting(a, b) {
    return b - a;
  }
}
