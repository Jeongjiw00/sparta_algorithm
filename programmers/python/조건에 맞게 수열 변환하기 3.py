# 조건에 맞게 수열 변환하기 3
def solution(arr, k):
    if k % 2 == 0:
        return [a + k for a in arr]
    else: 
        return [a * k for a in arr] 