//문자열 묶기
function solution(strArr) {
  let set = {};
  let length = new Set(strArr.map((a) => a.length));

  for (let len of length) {
    let str_i = strArr.filter((item) => item.length === len);

    set[len] = str_i.length;
  }

  return Math.max(...Object.values(set));
}
