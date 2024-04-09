# 문자열 다루기 기본
def solution(s):
    if ((len(s) == 4) | (len(s)==6)) & s.isdecimal():
        return True
    else:
        return False
    
# 깔끔
def solution(s):
    return s.isdigit() and len(s) in [4,6]
    
# 예외처리 활용
def solution(s):
    answer = True

    if (len(s) == 4) or (len(s) == 6):
        try: 
            s = int(s)

        except Exception as E:
            answer = False

    else:
        answer = False

    return answer