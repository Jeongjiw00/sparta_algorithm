// 배열의 원소만큼 추가하기
// arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return
function solution(arr) {
  let X = [];
  for (let num of arr) {
    for (let i = 0; i < num; i++) {
      X.push(num);
    }
  }
  return X;
}
// concat - 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환합니다.
function solution(arr) {
  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}
// fill(value, start, end) - 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경
// flat(depth) - 모든 하위 배열 요소가 지정된 깊이까지 재귀적으로 연결된 새 배열을 생성합니다.
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]
function solution(arr) {
  return arr.map((v) => Array(v).fill(v)).flat();
}
