# 짝수는 싫어요
def solution(n):
    answer = []

    for i in range(1, n + 1):
        if i % 2 == 1:
            answer.append(i)

    return answer


def solution(n):
    return [x for x in range(n + 1) if x % 2]