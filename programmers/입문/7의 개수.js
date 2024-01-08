// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return

function solution(array) {
  let join = array.join("");
  let answer = 0;

  for (let i of join) {
    // console.log(typeof i);
    let num = Number(i);
    if (num === 7) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
