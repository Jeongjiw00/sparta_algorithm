// 피로도
// 실패
function solution(k, dungeons) {
  let answer = 0;

  dungeons = dungeons.sort((a, b) => {
    if (b[0] - b[1] === a[0] - a[1]) return b[0] - a[0];
    return b[0] - b[1] - (a[0] - a[1]);
  });

  for (let i = 0; i < dungeons.length; i++) {
    let current = dungeons[i];
    if (k < current[0]) {
      return answer;
    }
    k -= dungeons[1];
    answer++;
  }

  return answer;
}

// DFS를 활용
function solution(k, dungeons) {
  let answer = [];
  let visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - current[1]);
        visited[i] = 0;
      }
    }
  }

  dfs(0, k);

  return Math.max(...answer);
}
