// [3차] 파일명 정렬
function solution(files) {
  return files.sort((a, b) => {
    // 숫자가 나오기 직전인 HEAD를 정규표현식으로 구한다.
    let wordA = a.match(/^\D+/)[0].toLowerCase();
    let wordB = b.match(/^\D+/)[0].toLowerCase();

    // HEAD를 기준으로 정렬을 한다.
    if (wordA < wordB) {
      return -1;
    }
    if (wordA > wordB) {
      return 1;
    }

    // HEAD가 같을 경우, NUMBER부분을 정규표현식으로 구한다.
    let numberA = Number(a.match(/\d+/)[0]);
    let numberB = Number(b.match(/\d+/)[0]);

    // NUMBER의 크기에 따라 정렬을 한다.
    return numberA - numberB;
  });
}
// 다른 풀이
function customSort(a, b) {
  const headA = a.replace(/[\d]+[\w.\s-]{0,}/, "");
  const headB = b.replace(/[\d]+[\w.\s-]{0,}/, "");
  let alphaComparison = headA.localeCompare(headB, undefined, {
    sensitivity: "base",
  });

  if (alphaComparison === 0) {
    const realA = Number(a.match(/\d{1,5}/)[0]);

    const realB = Number(b.match(/\d{1,5}/)[0]);

    return realA - realB;
  }

  return alphaComparison;
}

function solution2(files) {
  var answer = [];
  files.sort(customSort);

  return files;
}
