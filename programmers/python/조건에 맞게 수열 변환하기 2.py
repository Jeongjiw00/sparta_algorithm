# 조건에 맞게 수열 변환하기 2
def solution(arr):
    answer = 0
    while True :
        flag = False
        for i, num in enumerate(arr) :
            if num >= 50 and num % 2 == 0 :
                arr[i] = num // 2
                flag = True
            elif num < 50 and num % 2 == 1 :
                arr[i] = num * 2 + 1
                flag = True
        if flag :
            answer += 1
        else :
            break
    return answer