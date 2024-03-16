// 영어 끝말잇기
function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (
      words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0) ||
      words.indexOf(words[i]) !== i
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }

  return [0, 0];
}
