// 단어 변환
function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  let queue = [];

  if (!words.includes(target)) return 0;

  // [시작단어, 변경횟수]
  queue.push([begin, answer]);

  while (queue) {
    console.log(queue);
    let [v, cnt] = queue.shift();

    if (v === target) {
      return cnt;
    }

    words.forEach((word) => {
      let notEqual = 0;

      if (visited.includes(word)) return;

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) notEqual++;
      }

      if (notEqual === 1) {
        // [단어, 횟수]
        queue.push([word, ++cnt]);
        visited.push(word);
      }
    });
  }

  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
