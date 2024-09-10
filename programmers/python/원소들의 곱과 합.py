# 원소들의 곱과 합
def solution(num_list):
    mul = 1 
    for n in num_list:
        mul *= n
    return int(mul < sum(num_list) ** 2)