# 조건에 맞게 수열 변환하기 1
def solution(arr):
    answer = []

    for item in arr:
        if item >= 50 and not item % 2:
            answer.append(item // 2)
        elif item < 50 and item % 2:
            answer.append(item * 2)
        else:
            answer.append(item)

    return answer