# 배열 비교하기
def solution(arr1, arr2):
    if len(arr1) < len(arr2) :
        return -1
    elif len (arr1) > len(arr2) :
        return 1
    elif sum(arr1) > sum(arr2):
        return 1
    elif sum(arr1) < sum(arr2):
        return -1
    else :
        return 0



def solution(arr1, arr2):
    return (len(arr1) > len(arr2)) - (len(arr2) > len(arr1)) or (sum(arr1) > sum(arr2)) - (sum(arr2) > sum(arr1))