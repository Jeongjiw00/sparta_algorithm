# 순서 바꾸기
def solution(num_list, n):
  return num_list[n:] + num_list[:n]



print(solution([5, 2, 1, 7, 5], 3))