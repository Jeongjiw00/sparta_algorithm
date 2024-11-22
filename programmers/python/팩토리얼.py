# 팩토리얼
def solution(n):
    answer, a = 1, 1
    while a <= n:
        a *= answer
        if a > n:
            answer -= 1
            break
        answer += 1
    return answer