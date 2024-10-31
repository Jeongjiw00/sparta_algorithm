# 합성수 찾기
def solution(n):
    answer = n
    for i in range(1, n + 1):
        for j in range(2, i):
            if i % j == 0:
                answer -= 1
                break
    return n - answer


def solution(n):
    output = 0
    for i in range(4, n + 1):
        for j in range(2, int(i ** 0.5) + 1):
            if i % j == 0:
                output += 1
                break
    return output