# 문자열 묶기
def solution(strArr):
    m = {}
    for s in strArr:
        if len(s) in m:
            m[len(s)] += 1
        else:
            m[len(s)] = 1
    return max(m.values())