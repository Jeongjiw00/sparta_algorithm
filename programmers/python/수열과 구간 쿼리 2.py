# 수열과 구간 쿼리 2
def solution(arr, queries):
    answer = []
    for s, e, k in queries:
        temp = []
        for idx, n in enumerate(arr):
            if s <= idx <= e and n > k:
                temp.append(n)
        answer.append(min(temp) if temp else -1)

    return answer