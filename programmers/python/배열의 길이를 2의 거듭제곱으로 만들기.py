# 배열의 길이를 2의 거듭제곱으로 만들기
def solution(arr):
    n = len(arr)
    if n & (n - 1) == 0: 
        return arr
    m = 1
    while m < n:
        m <<= 1
    return arr + [0] * (m - n)