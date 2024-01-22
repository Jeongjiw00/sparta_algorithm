//배열 조각하기
function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    const cut = query[i];

    if (i % 2 === 0) {
      arr.splice(cut + 1, arr.length - (cut + 1));
    } else {
      arr.splice(0, cut);
    }
  }

  return arr;
}

function solution2(arr, query) {
  let start = 0;
  let end = arr.length;
  for (let i = 0; i < query.length; i++) {
    i % 2 ? (start += query[i]) : (end = start + query[i]);
  }

  return start === end ? [-1] : arr.slice(start, end);
}
