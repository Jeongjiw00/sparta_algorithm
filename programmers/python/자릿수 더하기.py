# 자릿수 더하기
def solution(n):
    answer = 0

    for i in str(n):
        i = int(i)
        answer += i
        
    return answer