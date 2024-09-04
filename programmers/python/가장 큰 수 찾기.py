# 가장 큰 수 찾기
def solution(array):
    target = max(array)
    index = array.index(target)
    return [target, index]