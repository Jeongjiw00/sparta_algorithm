# 폰켓몬
def solution(nums):
  n = set(nums) # 중복값제외 - JS랑 동일
  s = len(nums)//2

  if s < len(n):
    return s
  else:
    return len(n)
  


#  counter 모듈사용
from collections import Counter

def solution(nums):
    count_dict = Counter(nums)
    answer = len(nums)/2 if len(count_dict) > len(nums)/2 else len(count_dict) 

    return answer