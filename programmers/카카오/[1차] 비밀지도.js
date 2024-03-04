// [1차] 비밀지도
function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let binary = (arr1[i] | arr2[i]).toString(2);
    // 9인 경우 1001 -> 01001로 바꾸기 위해 padStart 사용
    let line = String(binary).padStart(n, "0");
    line = line.replace(/[1-9]/g, "#").replace(/[0]/g, " ");
    answer.push(line);
  }
  return answer;
}
