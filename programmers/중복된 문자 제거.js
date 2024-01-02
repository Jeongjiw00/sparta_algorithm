// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return

function solution(my_string) {
  let set = new Set();
  let new_string = "";

  for (let alpha of my_string) {
    set.add(alpha);
  }

  for (let alpha of set) {
    new_string += alpha;
  }

  return new_string;
}

console.log(solution("We are the world") === "We arthwold");
