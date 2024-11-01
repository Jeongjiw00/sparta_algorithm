# 문자열 잘라서 정렬하기
def solution(myString):
    return sorted(al for al in myString.split('x') if al)