// 대충 만든 자판
function solution(keymap, targets) {
  let answer = [];
  let press = 0;

  targets.map((target) => {
    for (let i = 0; i < target.length; i++) {
      let cnt = Infinity;
      keymap.map((key) => {
        const idx = key.indexOf(target[i]);
        if (idx > -1) cnt = Math.min(cnt, idx + 1);
      });
      press += cnt;
    }
    answer.push(press);
    press = 0;
  });
  return answer.includes(Infinity) ? -1 : answer;
}
