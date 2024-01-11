// rny_string
// rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return

function solution(rny_string) {
  let answer = "";
  if (rny_string.includes("m")) {
    for (const i of rny_string) {
      i === "m" ? (answer += "rn") : (answer += i);
    }
    return answer;
  }
  return rny_string;
}

// replace() 사용
const solution2 = (rny_string) => rny_string.replaceAll("m", "rn");
