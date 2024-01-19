// 배열에서 문자열 대소문자 변환하기
// 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution
function solution(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = i % 2 === 0 ? strArr[i].toLowerCase() : strArr[i].toUpperCase();
  }

  return strArr;
}

function solution2(strArr) {
  return strArr.map((v, i) =>
    i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()
  );
}
