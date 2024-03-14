# 자연수 뒤집어 배열로 만들기
def solution(n):
  answer = list(map(int, reversed(str(n))))
  return answer


# null
def solution(n):
  answer = list(map(int, str(n)))
  return answer.reverse()
def solution(n):
  answer = list(map(int, str(n))).reverse()
  return answer