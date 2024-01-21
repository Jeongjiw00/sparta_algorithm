//공백으로 구분하기 2
function solution(my_string) {
  return my_string.split(" ").filter((a) => a !== "");
}

console.log(solution(" i    love  you"));
