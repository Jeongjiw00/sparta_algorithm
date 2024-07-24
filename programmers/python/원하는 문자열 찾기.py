# 원하는 문자열 찾기
def solution(myString, pat):
    if pat.lower() in myString.lower(): return 1
    return 0



def solution(myString, pat):
    return int(pat.lower() in myString.lower())