// 전화번호 목록
function solution(phone_book) {
  let sort = phone_book.sort();

  for (let i = 0; i < sort.length - 1; i++) {
    let nextString = sort[i + 1].substr(0, sort[i].length);

    if (sort[i] === nextString) {
      return false;
    }
  }

  return true;
}

function solution(phone_book) {
  let answer = phone_book
    .sort()
    .some((value, index, self) => self[index + 1]?.indexOf(value) === 0);

  return !answer;
}
