// 네트워크
function solution(n, computers) {
  let answer = 0;
  const visited = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 방문하지 않은 노드에서 dfs 탐색
      dfs(i, visited, computers);
      // 해당 시점에서는 위의 조건문으로 이미 위에 dfs 탐색에서 방문된 노드는
      //  더 이상 방문하지 않는 것이 보장됨
      answer++;
      // 따라서 그냥 방문 후 개수 count 해도 중복 발생 X
    }
  }

  return answer;
}

const dfs = (node, visited, computers) => {
  // 현재 node를 방문처리 하고
  visited[node] = true;
  for (let i = 0; i < computers.length; i++) {
    if (computers[node][i] === 1 && !visited[i])
      // 연결된 노드가 있고 해당 노드를 방문하지 않았다면
      // dfs로 방문 진행
      dfs(i, visited, computers);
  }
};

// --------------------------------------
function solution2(n, computers) {
  let visited = [false];
  let answer = 0;

  function dfs(i) {
    visited[i] = true;
    for (let j = 0; j < computers[i].length; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
