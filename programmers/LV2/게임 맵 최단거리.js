// 게임 맵 최단거리
function solution(maps) {
  let n = maps.length; // 행
  let m = maps[0].length; // 열
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // bfs
  let bfs = () => {
    let queue = [[0, 0, 1]]; // 행, 열, 이동거리
    maps[0][0] = 0; // 이동한 거리 0으로 막기

    while (queue.length > 0) {
      //큐가 비어있지 않는 동안 반복
      let [row, col, distance] = queue.shift();

      // 적 팀 진영 도착시 값 리턴
      if (row == n - 1 && col == m - 1) {
        return distance;
      }

      // 상하좌우 이동 여부 확인
      for (let [r, c] of dir) {
        let newRow = row + r;
        let newCol = col + c; //현재 위치에서 상하좌우로 이동한 새로운 위치

        // 새로운 위치가 맵 내에 있고 벽이 아닐 시 이동 가능
        if (
          newRow >= 0 &&
          newRow < n &&
          newCol >= 0 &&
          newCol < m &&
          maps[newRow][newCol] === 1
        ) {
          queue.push([newRow, newCol, distance + 1]);
          maps[newRow][newCol] = 0; // 방문한 위치를 0으로 표시
        }
      }
    }
    return -1;
  };

  return bfs();
}

function solution2(maps) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const cur = queue.shift();
    if (cur[0] === maps.length - 1 && cur[1] === maps[0].length - 1) {
      return cur[2];
    }

    for (let i = 0; i < 4; i++) {
      const ny = cur[0] + dy[i];
      const nx = cur[1] + dx[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < maps[0].length &&
        ny < maps.length &&
        maps[ny][nx] === 1
      ) {
        maps[ny][nx] = 0;
        queue.push([ny, nx, cur[2] + 1]);
      }
    }
  }

  return -1;
}
