// 더 맵게
// 효율성 테스트 탈락
function solution(scoville, K) {
  const sortedScoville = [...scoville].sort((a, b) => b - a);
  let mixedCount = 0;

  while (sortedScoville.length >= 2 && sortedScoville.at(-1) < K) {
    const [first, second] = [sortedScoville.pop(), sortedScoville.pop()];
    const mixedScov = first + second * 2;
    sortedScoville.push(mixedScov);
    sortedScoville.sort((a, b) => b - a);
    mixedCount++;
  }

  return sortedScoville.at(-1) >= K ? mixedCount : -1;
}

// 힙구조
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  // 값을 넣되, 오름차 순 정렬함
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
    ) {
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  // 값을 빼되, 오름차 순 정렬 함
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (currentIndex * 2 + 1 < this.heap.length) {
      let minChildIndex =
        currentIndex * 2 + 2 < this.heap.length &&
        this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1]
          ? currentIndex * 2 + 2
          : currentIndex * 2 + 1;

      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }

      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      currentIndex = minChildIndex;
    }

    return minValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedScov = first + second * 2;
    minHeap.push(mixedScov);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}

// AI가 추천해준 방법 구현
function solution(scoville, K) {
  let answer = 0;
  let newScoville = [];

  // 오름차순 정렬
  scoville.sort((a, b) => a - b);

  let left = 0; // scoville 현재 인덱스
  let right = 0; // newScoville 현재 인덱스

  // scoville, newScoville은 항상 오름차순 정렬
  // 음식을 섞을 수 있고 && 최솟값이 K보다 작은 경우
  while (
    scoville.length - left + newScoville.length - right >= 2 &&
    (scoville[left] < K || newScoville[right] < K)
  ) {
    let origin1;
    let origin2;
    let new1;
    let new2;

    if (left < scoville.length) origin1 = scoville[left];
    if (left + 1 < scoville.length) origin2 = scoville[left + 1];
    if (right < newScoville.length) new1 = newScoville[right];
    if (right + 1 < newScoville.length) new2 = newScoville[right + 1];

    if (
      newScoville.length === 0 ||
      right >= newScoville.length ||
      (origin2 !== undefined && origin2 <= new1)
    ) {
      // case1. scoville에서 2가지 음식을 섞는 경우
      left += 2;
      newScoville.push(origin1 + origin2 * 2);
    } else if (
      left >= scoville.length ||
      (new2 !== undefined && new2 <= origin1)
    ) {
      // case2. newScoville에서 2가지 음식을 섞는 경우
      right += 2;
      newScoville.push(new1 + new2 * 2);
    } else {
      // case3. scoville, newScoville에서 1가지 음식씩 섞는 경우
      left += 1;
      right += 1;
      origin1 < new1
        ? newScoville.push(origin1 + new1 * 2)
        : newScoville.push(new1 + origin1 * 2);
    }

    answer += 1;
  }

  return scoville[left] < K || newScoville[right] < K ? -1 : answer;
}
