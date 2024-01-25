//배열 만들기 6
function solution(arr) {
  let stk = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    stk[stk.length - 1] === arr[i] ? stk.pop() : stk.push(arr[i]);
  }
  return stk.length ? stk : [-1];
}
