# 두 수의 연산값 비교하기
def solution(a, b):
    strAdd = int(str(a) + str(b))
    com = 2 * a * b
    return max(strAdd, com)

def solution(a, b):
    return max(int(str(a) + str(b)), 2 * a * b)