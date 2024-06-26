// 신규 아이디 추천
function solution(new_id) {
  const answer = new_id
    // 1 소문자
    .toLowerCase()
    // 2 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    .replace(/[^\w-_.]/g, "")
    // 3 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    .replace(/\.+/g, ".")
    // 4 마침표(.)가 처음이나 끝에 위치한다면 제거
    .replace(/^\.|\.$/g, "")
    // 5 빈 문자열이라면, new_id에 "a"를 대입
    .replace(/^$/, "a")
    // 6 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    .slice(0, 15)
    // 6 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
    .replace(/\.$/, "");
  const len = answer.length;
  // 7 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
