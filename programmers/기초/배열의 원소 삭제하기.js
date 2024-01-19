// 배열의 원소 삭제하기
// arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return
// filter 이용
function solution(arr, delete_list) {
  return arr.filter((num) => !delete_list.includes(num));
}
// set 이용
function solution2(arr, delete_list) {
  let set1 = new Set(arr);
  let set2 = new Set(delete_list);

  Set.prototype.difference = function (set) {
    let result = new Set(this);
    for (let x of set) {
      result.delete(x);
    }
    return result;
  };

  return [...set1.difference(set2)];
}
