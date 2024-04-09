# 문자열 내림차순으로 배치하기
def solution(s):    
    return ''.join(reversed(sorted(s)))

# sorted 안에 reverse 값을 주는 것도 가능
def solution(s):
    return ''.join(sorted(s, reverse=True))