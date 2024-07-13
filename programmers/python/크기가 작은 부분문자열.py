# 크기가 작은 부분문자열
def solution(t, p):
    answer = 0
    i = len(t)
    j = len(p)
    for i in range(i - j + 1) :
        if int(t[i : i + j]) <= int(p) :
            answer += 1
    return answer