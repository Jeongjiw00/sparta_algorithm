// 환자의 응급도를 기준으로 진료 순서
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return

function solution(emergency) {
  // slice - 배열복사
  let ordered = emergency.slice().sort((a, b) => b - a);
  return emergency.map((x) => ordered.indexOf(x) + 1);
}

console.log(solution([3, 76, 24])); //	[3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
