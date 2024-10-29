# 하샤드 
def solution(x):
    nums = [int(x) for x in list(str(x))]
    return x % sum(nums) == 0


def solution(x):
    return x % sum(int(x) for x in str(x)) == 0