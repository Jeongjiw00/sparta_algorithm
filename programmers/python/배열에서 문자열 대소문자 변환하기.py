# 배열에서 문자열 대소문자 변환하기
def solution(strArr):
    for index, e in enumerate(strArr):
        if index % 2 == 0:
            strArr[index] = e.lower()
        else:
            strArr[index] = e.upper()
    return strArr