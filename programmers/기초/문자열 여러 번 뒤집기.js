// 문자열 여러 번 뒤집기
// queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미
function solution(my_string, queries) {
  let arr = my_string.split("");
  let reverse = "";
  for (let x of queries) {
    let num = x[1] - x[0];
    reverse = arr.slice(x[0], x[1] + 1).reverse();

    arr.splice(x[0], num + 1);
    arr.splice(x[0], 0, ...reverse);
  }
  return arr.join("");
}
