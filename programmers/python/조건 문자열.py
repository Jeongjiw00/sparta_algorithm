# 조건 문자열
def solution(ineq, eq, n, m):
    answer = 0
    
    if n > m and ineq == ">":
        answer = 1
    elif n < m and ineq == "<":
        answer = 1
    elif n == m and eq == "=":
        answer = 1

    return answer



def solution(ineq, eq, n, m):
    return int(eval(str(n)+ineq+eq.replace('!', '')+str(m)))