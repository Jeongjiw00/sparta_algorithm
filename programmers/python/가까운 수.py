# 가까운 수
def solution(array, n):
    array.sort()
    temp = []

    for i in array :
        temp.append(abs(n - i))

    return array[temp.index(min(temp))]
