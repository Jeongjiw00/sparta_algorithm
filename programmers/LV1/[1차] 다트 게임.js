// [1차] 다트 게임
function solution(dartResult) {
  let darts = dartResult.split("");
  // 각 기회마다 얻은 점수 배열
  let scores = [];
  // 각 기회마다 얻은 점수
  let score = 0;

  for (let i = 0; i < darts.length; i++) {
    if (!isNaN(darts[i])) {
      // 10인 경우
      if (darts[i] === "1" && darts[i + 1] === "0") {
        score = 10;
        i++; // 다음에 오는 0은 건너 뛰어야 함
      } else score = darts[i];
    } else if (darts[i] === "S") {
      scores.push(Math.pow(score, 1));
    } else if (darts[i] === "D") {
      scores.push(Math.pow(score, 2));
    } else if (darts[i] === "T") {
      scores.push(Math.pow(score, 3));
    } else if (darts[i] === "#") {
      scores[scores.length - 1] *= -1;
    } else if (darts[i] === "*") {
      scores[scores.length - 2] *= 2;
      scores[scores.length - 1] *= 2;
    }
  }

  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum;
}

// 정규표현식 사용
function solution(dartResult) {
  let pattern = /(\d+|\D)/g;
  let matchArr = dartResult.match(pattern);
  let tempArr = [];

  for (let i = 0; i < matchArr.length; i++) {
    if (Number.isInteger(matchArr[i])) {
      tempArr.push(matchArr[i]);
    } else if (matchArr[i] === "S") tempArr.push(Number(matchArr[i - 1]));
    else if (matchArr[i] === "D") tempArr.push(Number(matchArr[i - 1] ** 2));
    else if (matchArr[i] === "T") tempArr.push(Number(matchArr[i - 1] ** 3));
    else if (matchArr[i] === "*") {
      tempArr[tempArr.length - 1] = tempArr[tempArr.length - 1] * 2;
      tempArr[tempArr.length - 2] = tempArr[tempArr.length - 2] * 2;
    } else if (matchArr[i] === "#") {
      tempArr[tempArr.length - 1] = tempArr[tempArr.length - 1] * -1;
    }
  }
  return tempArr.reduce((a, b) => Number(a) + Number(b));
}
