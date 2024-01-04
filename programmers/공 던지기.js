// 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
// 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return

function solution(numbers, k) {
  let index = 0;

  while (k > 1) {
    if (index <= numbers.length - 3) {
      index += 2;
    } else {
      index = index + 2 - numbers.length;
    }
    k -= 1;
    console.log("k = ", k);
    console.log("i = ", index);
  }

  return numbers[index];
}

// 0,2,4->0    0,2,4,6->0
console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 3
