# 대문자와 소문자
def solution(my_string):
    answer = ''
    for i in my_string :
        if i.islower() :
            answer += i.upper()
        else :
            answer += i.lower()
    return answer


def solution(my_string):
    return my_string.swapcase()