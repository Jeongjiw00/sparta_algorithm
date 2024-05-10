// 모음 사전
// DFS
function solution(word) {
  let vowels = ["A", "E", "I", "O", "U"];
  let dictionary = [];

  const dfs = (cur, len) => {
    if (len > 5) return;

    dictionary.push(cur);

    for (let i = 0; i < vowels.length; i++) {
      dfs(cur + vowels[i], len + 1);
    }
  };

  dfs("", 0);

  return dictionary.indexOf(word);
}

// 기발한 풀이
function solution2(word) {
  let answer = 0;
  const vowels = ["A", "E", "I", "O", "U"];
  const counts = [781, 156, 31, 6, 1];

  for (let i = 0; i < word.length; i++) {
    answer += vowels.indexOf(word[i]) * counts[i] + 1;
  }

  return answer;
}
