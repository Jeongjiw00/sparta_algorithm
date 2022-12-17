function solution(sides) {
  let max_side = 0;
  let sum_all_side = 0;

  for (let i in sides) {
    sum_all_side += sides[i];

    if (sides[i] > max_side) {
      max_side = sides[i];
    }
  }

  let sum_side = sum_all_side - max_side;
  if (max_side < sum_side) {
    return 1;
  } else {
    return 2;
  }
}

sides = [199, 72, 222];
console.log(solution(sides));
