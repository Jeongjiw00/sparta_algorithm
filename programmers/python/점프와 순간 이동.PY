# 점프와 순간 이동
import math

def solution(n):
  answer = 1
  
  while n != 1:
    n = n / 2

    if n % 1 != 0:
      n = math.floor(n)
      answer += 1
        
  return answer
