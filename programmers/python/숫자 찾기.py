# 숫자 찾기
def solution(num, k):
    a = str(num).find(str(k))
    return a+1 if a >= 0 else a


def solution(num, k):
    for i, n in enumerate(str(num)):
        if str(k) == n:
            return i + 1
    return -1