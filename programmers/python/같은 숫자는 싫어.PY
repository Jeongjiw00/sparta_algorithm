# 같은 숫자는 싫어
def solution(arr):
    answer = [arr[0]]
    for a in arr:
        if not a == answer[-1]:
            answer.append(a)

    return answer


def solution2(arr):
    result = []
    for a in arr:
        if len(result) == 0 or result[-1] != a:
            result.append(a)

    return result