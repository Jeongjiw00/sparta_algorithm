# 세 개의 구분자
def solution(myStr):
    myStr = myStr.replace('a', ' ').replace('b', ' ').replace('c', ' ')
    return myStr.split() if myStr.split() else ["EMPTY"]