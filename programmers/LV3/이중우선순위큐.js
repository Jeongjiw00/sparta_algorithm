// 이중우선순위큐
function solution(operations) {
  const heap = [];
  // 배열[0] = 명령어, 배열[1] = 숫자
  const op = operations.map((operation) => operation.split(" "));

  op.forEach((num) => {
    if (num[0] === "I") {
      heap.push(Number(num[1]));
    } else {
      const findValue = (num[1] === "1" ? Math.max : Math.min)(...heap);
      const delIdx = heap.indexOf(findValue);
      heap.splice(delIdx, 1);
    }
  });

  return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}

//
function solution2(operations) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < operations.length; i++) {
    operation = operations[i].split(" ");

    if (operation[0] === "I") {
      arr.push(parseInt(operation[1]));
    } else if (operation[1] == "1") {
      arr.pop();
    } else if (operation[1] == "-1") {
      arr.shift();
    }
    arr.sort((a, b) => a - b);
  }
  if (arr.length === 0) answer = [0, 0];
  else answer = [arr.pop(), arr.shift()];
  return answer;
}
