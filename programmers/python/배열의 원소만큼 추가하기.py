# 배열의 원소만큼 추가하기
# APPEND
def solution(arr):
    answer = []
    for x in arr:
        for i in range(x):
            answer.append(x)
    return answer


def solution(arr):
    answer = []
    for num in arr:
        answer += [num] * num
    return answer