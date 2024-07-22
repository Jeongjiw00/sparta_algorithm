# 부분 문자열 이어 붙여 문자열 만들기
def solution(my_strings, parts):
  answer = []
  for i, (start, end) in enumerate(parts):
    answer.append(my_strings[i][start : end + 1]) 
  return ''.join(answer)