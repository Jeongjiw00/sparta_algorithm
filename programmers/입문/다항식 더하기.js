// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return

function solution(polynomial) {
  let array = polynomial.split(" ");
  let substring = "x";
  let x_sum = 0;
  let c_sum = 0;
  let k = "";

  for (let i of array) {
    // x항
    if (i.includes(substring)) {
      if (i === "x") {
        x_sum += 1;
      }
      if (i.length > 2) {
        x_sum += Number(i.slice(0, i.length - 1));
      }
      if (i.length === 2) {
        x_sum += Number(i[0]);
      }
    }
    // 상수항
    if (!i.includes(substring) && i !== "+") {
      c_sum += Number(i);
    }
  }

  if (x_sum > 1) {
    if (c_sum === 0) {
      return String(x_sum) + "x";
    } else {
      return String(x_sum) + "x" + " + " + String(c_sum);
    }
  }
  if (x_sum === 0) {
    if (c_sum !== 0) {
      return String(c_sum);
    } else {
      return "0";
    }
  }
  if (x_sum === 1) {
    if (c_sum !== 0) {
      return "x" + " + " + String(c_sum);
    } else {
      return "x";
    }
  }
}

// console.log(solution("3x + 7 + x")); // "4x + 7"
// console.log(solution("x + x + x")); // "3x"
console.log(solution("10x + x")); // "11x"
