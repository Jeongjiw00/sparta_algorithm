//리스트 자르기
function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  let result;
  switch (n) {
    case 1: {
      result = num_list.slice(0, b + 1);
      break;
    }
    case 2: {
      result = num_list.slice(a, num_list.length);
      break;
    }
    case 3: {
      result = num_list.slice(a, b + 1);
      break;
    }
    case 4: {
      const cut = num_list.slice(a, b + 1);
      result = cut.filter((_, i) => i % c === 0);
      break;
    }
  }

  return result;
}
