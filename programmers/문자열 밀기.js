// 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동
// 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return

function solution(A, B) {
  let count = 0;

  // 이미 같은 경우
  if (A === B) {
    return 0;
  }

  // 아닌 경우
  while (count !== A.length) {
    let array = [];

    // 밀기
    for (let i = 0; i < A.length; i++) {
      if (i === A.length - 1) {
        array[0] = A[i];
      } else {
        array[i + 1] = A[i];
      }
    }

    // 민 횟수 세주기
    count++;

    // 확인하기
    if (array.join("") === B) {
      return count;
    }

    // 민 문자열로 바꿔주기
    A = array.join("");
  }

  return -1;
}

// console.log(solution("hello", "ohell")); // 1
// console.log(solution("apple", "elppa")); // -1
// console.log(solution("abc", "abc")); // 0
console.log(solution("abc", "bca")); // 2
