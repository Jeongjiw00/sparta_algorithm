# 삼총사
def solution(number):
    answer = 0
    num = len(number)
    for i in range(num):
        for j in range(num):
            if i == j:
                continue
            for k in range(num):
                if i == k or j == k:
                    continue
                if number[i] + number[j] + number[k]==0:
                    answer = answer + 1

    return answer/6




def solution2(number):
    answer = 0
    l = len(number)
    for i in range(l-2):
        for j in range(i+1, l-1):
            for k in range(j+1, l):
                if number[i]+number[j]+number[k] == 0:
                    answer += 1           
    return answer