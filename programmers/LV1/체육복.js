// 체육복
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
// 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
// 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
function solution(n, lost, reserve) {
  // 진짜 빌려야 하는 학생
  let borrow = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a - b);
  // 빌려 줄 수 있는 학생
  let lend = reserve.filter((r) => !lost.includes(r)).sort((a, b) => a - b);

  // 체육복이 있는 학생 수 - 한 개 이상
  let answer = n - borrow.length;

  for (let i = 0; i < borrow.length; i++) {
    let borrowNum = borrow[i];

    for (let j = 0; j < lend.length; j++) {
      let lendNum = lend[j];
      if (lendNum === borrowNum - 1 || lendNum === borrowNum + 1) {
        answer += 1;
        lend[j] = -1;
        break;
      }
    }
  }

  return answer;
}
