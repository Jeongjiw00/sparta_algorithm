# 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
def solution(myString, pat):
    return myString[0:myString.rfind(pat)] + pat