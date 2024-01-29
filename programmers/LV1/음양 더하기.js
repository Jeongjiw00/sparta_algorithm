function solution(absolutes, signs) {
  return absolutes.reduce(
    (sum, val, index) => sum + val * (signs[index] ? 1 : -1),
    0
  );
}
