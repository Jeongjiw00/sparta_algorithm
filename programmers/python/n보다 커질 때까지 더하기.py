# n보다 커질 때까지 더하기
def solution(numbers, n):
    answer = 0
    for i in range(len(numbers)):
        answer = sum(numbers[:i + 1])
        if answer > n:
            return answer