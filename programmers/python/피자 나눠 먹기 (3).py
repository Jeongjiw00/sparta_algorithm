# 피자 나눠 먹기 (3)
def solution(slice, n):
    if n % slice == 0 :
        return n // slice
    else :
        return (n // slice) + 1



def solution(slice, n):
    return ((n - 1) // slice) + 1