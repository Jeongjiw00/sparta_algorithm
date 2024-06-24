// 다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);
  // 다리를 건너는 시간
  let time = 0;

  while (bridge.length) {
    // bridge 앞 요소 제거.
    bridge.shift();
    if (truck_weights.length) {
      const sumBridge = bridge.reduce((a, b) => a + b, 0);
      if (sumBridge + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }

    //  bridge배열이 채워졌다가 빈배열이 될때까지 1씩 증가
    time++;
  }
  return time;
}
