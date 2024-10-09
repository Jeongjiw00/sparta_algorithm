# flag에 따라 다른 값 반환하기
def solution(a, b, flag):
    if flag: return  a+b 
    else: return a-b


def solution(a, b, flag):
    return a + b if flag else a - b