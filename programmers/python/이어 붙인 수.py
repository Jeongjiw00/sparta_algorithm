# 이어 붙인 수
def solution(num_list):
    odd = []
    even = []
    for n in num_list:
        if n % 2: odd.append(str(n))
        else: even.append(str(n))
    return int(''.join(odd)) + int(''.join(even))