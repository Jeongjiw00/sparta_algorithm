//** my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요 */
function solution1(my_string) {
  const regex = /[^0-9]/g;
  let result = my_string.replace(regex, "");
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    const element = Number(result[i]);
    count += element;
  }
  return count;
}

function solution2(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}

console.log(solution1("aAb1B2cC34oOp"));
console.log(solution2("aAb1B2cC34oOp"));
