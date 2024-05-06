// 의상
// map
function solution(clothes) {
  const map = new Map();

  for (const [name, type] of clothes) {
    if (map.get(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  }

  let answer = 1;

  for (const [key, val] of map) {
    answer *= val + 1;
  }
  return answer - 1;
}

// forEach
function solution1(clothes) {
  let types = {};
  let result = 1;

  clothes.forEach((v) => (types[v[1]] = (types[v[1]] || 0) + 1));

  for (const key in types) {
    result *= types[key] + 1;
  }

  return result - 1;
}
