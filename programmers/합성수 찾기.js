// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return

function solution(n) {
  // 중복없도록
  let set = new Set();

  for (let num = 1; num <= n; num++) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        //set이라 push 대신 add
        set.add(num);
      }
    }
  }

  // set이라 length 대신 size
  return set.size;
}

console.log(solution(10) === 5);
