# 길이에 따른 연산
def solution(a):
    if len(a)<=10:
        total = 1
        for i in a:
            total *= i
        return total
    else:
        return sum(a)