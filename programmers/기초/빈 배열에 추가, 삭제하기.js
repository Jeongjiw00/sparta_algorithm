//빈 배열에 추가, 삭제하기
function solution(arr, flag) {
  let X = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        X.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        X.pop();
      }
    }
  }
  return X;
}
