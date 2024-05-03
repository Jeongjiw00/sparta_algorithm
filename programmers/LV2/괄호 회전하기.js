// 괄호 회전하기
function solution(s) {
  const obj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const check = (str) => {
    const array = [];

    for (const s of str) {
      if ("{[(".includes(s)) array.push(s);
      else if (obj[s] !== array.pop()) return false;
    }

    return array.length ? false : true;
  };

  // str.slice(i) + str.slice(0, i)
  const rotate = (str) => str.substring(1) + str[0];

  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    s = rotate(s);
    cnt += check(s) ? 1 : 0;
  }
  return cnt;
}
