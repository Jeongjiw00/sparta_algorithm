// A 강조하기
// myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환
function solution(myString) {
  return [...myString.replaceAll("a", "A")]
    .map((a) =>
      a.charCodeAt() > 65 && a.charCodeAt() < 97 ? a.toLowerCase() : a
    )
    .join("");
}

// 간단하게
function solution2(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}
