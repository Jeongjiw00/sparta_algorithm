# 수열과 구간 쿼리 3
def solution(arr, queries):
    for a, b in queries:
        arr[a], arr[b] = arr[b], arr[a]
    return arr