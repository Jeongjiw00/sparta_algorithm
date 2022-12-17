let check = false;
let check_one = false;
let check_two = false;
let check_three = false;

function no_check(lines) {
  check_one = lines[0][1] <= lines[1][0] || lines[0][0] >= lines[1][1];
  check_two = lines[0][1] <= lines[2][0] || lines[0][0] >= lines[2][1];
  check_three = lines[1][1] <= lines[2][0] || lines[1][0] >= lines[2][1];
  check = check_one && check_two && check_three;
  return check;
}

let result = 0;
let same_line_one;
let same_line_two;
let same_line_three;

function include_one() {
  if (lines[0][0] >= lines[1][0] && lines[0][1] <= lines[1][1]) {
    same_line_one = [lines[0][0], lines[0][1]];
  } else if (lines[0][0] <= lines[1][0] && lines[0][1] >= lines[1][1]) {
    same_line_one = [lines[1][0], lines[1][1]];
  } else {
    if (
      Math.min(lines[0][1] - lines[1][0], lines[1][1] - lines[0][0]) ===
      lines[0][1] - lines[1][0]
    ) {
      same_line_one = [lines[1][0], lines[0][1]];
    } else {
      same_line_one = [lines[0][0], lines[1][1]];
    }
  }
}
function include_two() {
  if (lines[0][0] >= lines[2][0] && lines[0][1] <= lines[2][1]) {
    same_line_two = [lines[0][0], lines[0][1]];
  } else if (lines[0][0] <= lines[2][0] && lines[0][1] >= lines[2][1]) {
    same_line_two = [lines[2][0], lines[2][1]];
  } else {
    if (
      Math.min(lines[0][1] - lines[2][0], lines[2][1] - lines[0][0]) ===
      lines[0][1] - lines[2][0]
    ) {
      same_line_two = [lines[2][0], lines[0][1]];
    } else {
      same_line_two = [lines[0][0], lines[2][1]];
    }
  }
}
function include_three() {
  if (lines[1][0] >= lines[2][0] && lines[1][1] <= lines[2][1]) {
    same_line_three = [lines[1][0], lines[1][1]];
  } else if (lines[1][0] <= lines[2][0] && lines[1][1] >= lines[2][1]) {
    same_line_three = [lines[2][0], lines[2][1]];
  } else {
    if (
      Math.min(lines[1][1] - lines[2][0], lines[2][1] - lines[1][0]) ===
      lines[1][1] - lines[2][0]
    ) {
      same_line_three = [lines[2][0], lines[1][1]];
    } else {
      same_line_three = [lines[1][0], lines[2][1]];
    }
  }
}

// let sum_line;
// function sum_line(lines) {
//   let a = Math.min(same_line_one[0], same_line_two[0], same_line_three[0]);
//   let b = Math.min(same_line_one[1], same_line_two[1], same_line_three[1]);
//   sum_line = [a, b];
// }

function solution(lines) {
  if (no_check(lines) === true) {
    return 0;
  } else {
    if (check_one === false) {
      include_one(lines);
      console.log(same_line_one);
    }
    if (check_two === false) {
      include_two(lines);
      console.log(same_line_two);
    }
    if (check_three === false) {
      include_three(lines);
      console.log(same_line_three);
    }
  }

  let new_lines = [same_line_one, same_line_two, same_line_three];

  if (no_check(new_lines) === true) {
    result += new_lines[0][1]-new_lines[0][0]
    result += new_lines[1][1]-new_lines[1][0]
    result += new_lines[2][1]-new_lines[2][0]
  } else {
    
  }

  //   sum_line();

  return result;
}

lines = [
  [0, 5],
  [3, 9],
  [1, 10],
];
console.log(no_check(lines));
console.log(solution(lines));
lines = [
  [-1, 1],
  [1, 3],
  [3, 9],
];
console.log(no_check(lines));
console.log(solution(lines));
lines = [
  [0, 2],
  [-3, -1],
  [-2, 1],
];
console.log(no_check(lines));
console.log(solution(lines));
