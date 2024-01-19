// 순서 바꾸기
// n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return
function solution(num_list, n) {
  let front = num_list.slice(0, n);
  let back = num_list.slice(n, num_list.length);

  return back.concat(front);
}

// 앞 배열을 잘라서 바로 붙여주기
function solution2(num_list, n) {
  num_list.push(...num_list.splice(0, n));
  return num_list;
}
