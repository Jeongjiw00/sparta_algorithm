//세 개의 구분자
function solution(myStr) {
  let result = myStr
    .split("a")
    .map((str1) => str1.split("b").map((str2) => str2.split("c")))
    .flat()
    .flat()
    .filter((a) => a !== "");

  return result.length !== 0 ? result : ["EMPTY"];
}

// 한 번에 split() 사용가능
function solution(myStr) {
  const arr = myStr.split(/[abc]/).filter((e) => e);
  return arr.length == 0 ? ["EMPTY"] : arr;
}
