# 1로 만들기
def solution(num_list):
    answer = 0

    for n in num_list:
        while n != 1:
            n //= 2
            answer += 1

    return answer



def solution(num_list):
    return sum(len(bin(i)) - 3 for i in num_list)