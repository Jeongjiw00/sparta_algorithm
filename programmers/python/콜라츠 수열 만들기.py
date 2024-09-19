# 콜라츠 수열 만들기
def solution(n):
    answer = []
    while n != 1:
        answer.append(n)
        if n % 2:
            n = 3 * n + 1
        else:
            n //= 2
    answer.append(1)
    return answer