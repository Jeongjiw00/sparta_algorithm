# 가운데 글자 가져오기
def solution(s):
  a = int(len(s)) // 2
  b = int(len(s)) % 2

  if b == 0:
    return s[a + b - 1 : a + b + 1]
  else:
    return s[a + b - 1]
  


def solution(str):
 return str[(len(str)-1)//2 : len(str)//2 + 1]