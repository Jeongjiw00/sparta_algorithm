# 배열 만들기 5
def solution(intStrs, k, s, l):
    answer = []

    for A in intStrs:
        num = int(A[s:s+l])
        if num > k:
            answer.append(num)

    return answer