// 주사위 게임 3
// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.

function solution(a, b, c, d) {
  if (a === b && a === c && a === d) return 1111 * a;

  if (a === b && a === c) return (10 * a + d) ** 2;
  if (a === b && a === d) return (10 * a + c) ** 2;
  if (a === c && a === d) return (10 * a + b) ** 2;
  if (b === c && b === d) return (10 * b + a) ** 2;

  if (a === b && c === d) return (a + c) * Math.abs(a - c);
  if (a === c && b === d) return (a + b) * Math.abs(a - b);
  if (a === d && b === c) return (a + b) * Math.abs(a - b);

  if (a === b) return c * d;
  if (a === c) return b * d;
  if (a === d) return b * c;
  if (b === c) return a * d;
  if (b === d) return a * c;
  if (c === d) return a * b;

  return Math.min(a, b, c, d);
}

// 다른 풀이
function solution2(a, b, c, d) {
  var answer = 0;
  // Settings
  let count = [0, 0, 0, 0, 0, 0, 0];
  let num = [a, b, c, d];
  count[a] += 1;
  count[b] += 1;
  count[c] += 1;
  count[d] += 1;

  // count 4
  if (Math.max(...count) == 4) {
    answer = 1111 * a;
  }
  // count 3
  if (Math.max(...count) == 3) {
    let p = count.indexOf(3);
    let q = count.indexOf(1);
    answer = (10 * p + q) ** 2;
  }
  if (Math.max(...count) == 2) {
    IFs = count.filter((a) => a == 0).length;
    // count 2, 2
    if (IFs == 5) {
      let p = count.indexOf(2);
      let q = num.filter((a) => a !== p)[0];
      answer = (p + q) * Math.abs(p - q);
    }
    // count 2, 1, 1
    if (IFs == 4) {
      let r = num.filter((a) => a !== count.indexOf(2))[0];
      let q = num.filter((a) => a !== count.indexOf(2))[1];
      answer = r * q;
    }
  }
  // count 1
  if (Math.max(...count) == 1) {
    answer = Math.min(...num);
  }
  return answer;
}
