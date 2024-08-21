# 홀수 vs 짝수
def solution(num_list):
    odd = 0
    even = 0

    for i, n in enumerate(num_list):
        if i % 2:
            even += n
        else:
            odd += n

    answer = odd if odd >= even else even

    return answer


def solution(num_list):
    return max(sum(num_list[::2]), sum(num_list[1::2]))