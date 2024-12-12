# 소인수분해
def solution(n):
    a = 2
    answer = []
    while n > 1:
        if n % a == 0:
            answer.append(a)
            while n % a == 0:
                n //= a
        a += 1

    return answer
