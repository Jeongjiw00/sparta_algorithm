// 추억 점수
function solution(name, yearning, photo) {
  let array = [];

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      for (let k = 0; k < name.length; k++) {
        if (name[k] === photo[i][j]) {
          sum += yearning[k];
        }
      }
    }
    array.push(sum);
  }

  return array;
}

// 간단히 map, reduce 활용
function solution(name, yearning, photo) {
  return photo.map((e) =>
    e.reduce((acc, value) => (acc += yearning[name.indexOf(value)] ?? 0), 0)
  );
}
