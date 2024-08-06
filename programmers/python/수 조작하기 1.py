# 수 조작하기 1
def solution(n, control):
    answer = n
    c = { 'w' : 1, 's' : -1, 'd' : 10, 'a' : -10 }

    for i in control:
        answer += c[i]
        
    return answer