//문자 개수 세기
function solution(my_string) {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = new Array(52).fill(0);

  my_string.split("").map((n) => {
    result[alpha.indexOf(n)] += 1;
  });

  return result;
}
